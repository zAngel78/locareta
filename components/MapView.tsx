import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { ArrowRight } from 'lucide-react'

// Dynamically import Leaflet components
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

interface Property {
  id: number
  price: string
  beds: number
  baths: number
  lat: number
  lng: number
  address: string
  image: string
}

interface MapViewProps {
  properties: Property[]
  onPropertySelect?: (id: number) => void
  selectedId?: number | null
}

export default function MapView({ properties, onPropertySelect, selectedId }: MapViewProps) {
  const [isClient, setIsClient] = useState(false)
  const [L, setL] = useState<any>(null)

  useEffect(() => {
    setIsClient(true)
    // Import Leaflet only on client side
    import('leaflet').then((leaflet) => {
      setL(leaflet.default)
    })
  }, [])

  if (!isClient || !L) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-brand-dark border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-400 text-sm font-medium tracking-wide uppercase">Loading Map...</p>
        </div>
      </div>
    )
  }

  // Custom Icon Function
  const createCustomIcon = (price: string, isSelected: boolean) => {
    return L.divIcon({
      className: 'custom-map-marker',
      html: `
        <div class="
          px-3 py-1.5 rounded-lg shadow-lg border border-slate-200 font-bold text-sm transition-all transform hover:scale-110
          ${isSelected 
            ? 'bg-brand-dark text-white scale-110 z-50' 
            : 'bg-white text-brand-dark hover:bg-brand-dark hover:text-white'
          }
        ">
          ${price}
        </div>
        <div class="
          w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] 
          absolute left-1/2 -translate-x-1/2 -bottom-[5px]
          ${isSelected ? 'border-t-brand-dark' : 'border-t-white'}
        "></div>
      `,
      iconSize: [60, 30],
      iconAnchor: [30, 35],
      popupAnchor: [0, -35]
    })
  }

  return (
    <div className="w-full h-full relative z-0">
      <MapContainer
        center={[37.7749, -122.4194]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        {/* Clean, Professional CartoDB Positron Tiles */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        
        {properties.map((property) => (
          <Marker
            key={property.id}
            position={[property.lat, property.lng]}
            icon={createCustomIcon(property.price, selectedId === property.id)}
            eventHandlers={{
              click: () => onPropertySelect?.(property.id),
            }}
          >
            <Popup className="custom-popup" closeButton={false}>
              <div className="w-64 p-0 overflow-hidden rounded-xl font-sans">
                <div className="relative h-32 w-full">
                  <img 
                    src={property.image} 
                    alt={property.address} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-xs font-bold text-brand-dark">
                    For Sale
                  </div>
                </div>
                <div className="p-3 bg-white">
                  <div className="text-lg font-bold text-brand-dark font-serif mb-1">{property.price}</div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-medium">
                    <span>{property.beds} bds</span>
                    <span>•</span>
                    <span>{property.baths} ba</span>
                    <span>•</span>
                    <span>1,200 sqft</span>
                  </div>
                  <div className="text-sm text-slate-600 truncate mb-3">{property.address}</div>
                  <button className="w-full py-2 bg-brand-dark text-white text-xs font-bold rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-1">
                    View Details <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { Search, Filter, X, Bed, Bath, Home, DollarSign, MapPin, SlidersHorizontal } from 'lucide-react'
import ModernHeader from '@/components/ModernHeader'
import MapView from '@/components/MapView'
import { properties } from '@/data/properties'

export default function MapPageImproved() {
  const router = useRouter()
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [showMobileList, setShowMobileList] = useState(false)
  const [filters, setFilters] = useState({
    priceMin: '',
    priceMax: '',
    beds: '',
    baths: '',
    type: '',
    status: ''
  })

  // Get search query from URL if coming from hero search
  useEffect(() => {
    if (router.query.location) {
      setSearchQuery(router.query.location as string)
    }
  }, [router.query])

  // Filter properties based on search and filters
  const filteredProperties = properties.filter(property => {
    const matchesSearch = searchQuery === '' || 
      property.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.address.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesPrice = (!filters.priceMin || property.priceValue >= parseInt(filters.priceMin)) &&
                        (!filters.priceMax || property.priceValue <= parseInt(filters.priceMax))
    
    const matchesBeds = !filters.beds || property.beds >= parseInt(filters.beds)
    const matchesBaths = !filters.baths || property.baths >= parseFloat(filters.baths)
    const matchesType = !filters.type || property.type === filters.type
    const matchesStatus = !filters.status || property.status === filters.status

    return matchesSearch && matchesPrice && matchesBeds && matchesBaths && matchesType && matchesStatus
  })

  // Convert to map format - only include properties with coordinates
  const mapProperties = filteredProperties
    .filter(p => p.coordinates && p.coordinates.lat && p.coordinates.lng)
    .map(p => ({
      id: p.id,
      price: p.price,
      beds: p.beds,
      baths: p.baths,
      lat: p.coordinates!.lat,
      lng: p.coordinates!.lng,
      address: `${p.address}, ${p.city}`,
      image: p.image
    }))

  // Always start in San Francisco for a good initial view
  const mapCenter: [number, number] = [37.7749, -122.4194]

  const clearFilters = () => {
    setFilters({
      priceMin: '',
      priceMax: '',
      beds: '',
      baths: '',
      type: '',
      status: ''
    })
    setSearchQuery('')
  }

  return (
    <>
      <Head>
        <title>Map Search | RealHome Luxury</title>
        <meta name="description" content="Explore properties on an interactive map" />
      </Head>
      
      <div className="h-screen flex flex-col bg-white">
        <ModernHeader />
        
        <main className="flex-1 flex relative" style={{ height: 'calc(100vh - 80px)', marginTop: '80px' }}>
          
          {/* Map Section */}
          <div className="flex-1 relative">
            {/* Floating Search Bar */}
            <div className="absolute top-4 left-4 right-4 md:top-6 md:left-8 md:right-auto md:w-[500px] z-[40]">
              <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl border border-slate-200 p-2 md:p-3">
                <div className="flex items-center gap-2 md:gap-3">
                  <Search className="text-slate-400" size={18} />
                  <input 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by city..." 
                    className="flex-1 bg-transparent border-none outline-none text-slate-700 placeholder:text-slate-400 font-medium text-sm md:text-base"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="p-1 hover:bg-slate-100 rounded-full transition-colors"
                    >
                      <X size={16} className="text-slate-400" />
                    </button>
                  )}
                  <button 
                    onClick={() => setShowFilters(!showFilters)}
                    className={`p-2 md:p-2.5 rounded-lg md:rounded-xl transition-all flex items-center gap-1.5 md:gap-2 ${
                      showFilters ? 'bg-brand-dark text-white' : 'bg-slate-50 hover:bg-slate-100 text-slate-600'
                    }`}
                  >
                    <SlidersHorizontal size={16} className="md:w-[18px] md:h-[18px]" />
                    <span className="text-xs md:text-sm font-bold hidden sm:inline">Filters</span>
                  </button>
                </div>

                {/* Advanced Filters Panel */}
                {showFilters && (
                  <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 md:grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-600 mb-1 block">Min Price</label>
                      <input
                        type="number"
                        value={filters.priceMin}
                        onChange={(e) => setFilters({...filters, priceMin: e.target.value})}
                        placeholder="$0"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-brand-accent"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-600 mb-1 block">Max Price</label>
                      <input
                        type="number"
                        value={filters.priceMax}
                        onChange={(e) => setFilters({...filters, priceMax: e.target.value})}
                        placeholder="Any"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-brand-accent"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-600 mb-1 block">Beds</label>
                      <select
                        value={filters.beds}
                        onChange={(e) => setFilters({...filters, beds: e.target.value})}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-brand-accent"
                      >
                        <option value="">Any</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                        <option value="5">5+</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-600 mb-1 block">Baths</label>
                      <select
                        value={filters.baths}
                        onChange={(e) => setFilters({...filters, baths: e.target.value})}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-brand-accent"
                      >
                        <option value="">Any</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-600 mb-1 block">Type</label>
                      <select
                        value={filters.type}
                        onChange={(e) => setFilters({...filters, type: e.target.value})}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-brand-accent"
                      >
                        <option value="">All Types</option>
                        <option value="House">House</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Condo">Condo</option>
                        <option value="Villa">Villa</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-600 mb-1 block">Status</label>
                      <select
                        value={filters.status}
                        onChange={(e) => setFilters({...filters, status: e.target.value})}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-brand-accent"
                      >
                        <option value="">All</option>
                        <option value="For Sale">For Sale</option>
                        <option value="For Rent">For Rent</option>
                      </select>
                    </div>
                    <div className="col-span-2 md:col-span-3 flex justify-end gap-2 mt-2">
                      <button
                        onClick={clearFilters}
                        className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-brand-dark transition-colors"
                      >
                        Clear All
                      </button>
                      <button
                        onClick={() => setShowFilters(false)}
                        className="px-4 py-2 bg-brand-dark text-white rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors"
                      >
                        Apply Filters
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Results count */}
              {searchQuery && (
                <div className="mt-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-sm border border-slate-100">
                  <p className="text-sm text-slate-600">
                    <span className="font-bold text-brand-dark">{filteredProperties.length}</span> properties found
                    {searchQuery && <span> in <span className="font-bold">{searchQuery}</span></span>}
                  </p>
                </div>
              )}
            </div>

            <MapView 
              properties={mapProperties} 
              onPropertySelect={setSelectedProperty} 
              selectedId={selectedProperty}
              center={mapCenter}
              zoom={12}
            />
          </div>

          {/* Mobile: Floating List Button */}
          <button
            onClick={() => setShowMobileList(!showMobileList)}
            className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-brand-dark text-white px-6 py-3 rounded-full shadow-2xl font-bold text-sm flex items-center gap-2"
          >
            <MapPin size={18} />
            <span>View List ({filteredProperties.length})</span>
          </button>

          {/* Mobile: Bottom Sheet */}
          <div className={`lg:hidden fixed inset-x-0 bottom-0 z-40 bg-white rounded-t-3xl shadow-2xl transition-transform duration-300 ${
            showMobileList ? 'translate-y-0' : 'translate-y-[calc(100%-80px)]'
          }`}>
            {/* Handle */}
            <div 
              className="py-3 flex justify-center cursor-pointer"
              onClick={() => setShowMobileList(!showMobileList)}
            >
              <div className="w-12 h-1.5 bg-slate-300 rounded-full"></div>
            </div>

            {/* Header */}
            <div className="px-4 pb-3 border-b border-slate-100">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-bold text-brand-dark">
                  {filteredProperties.length} Properties
                </h3>
                <button
                  onClick={() => setShowMobileList(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-slate-50 p-2 rounded-lg text-center">
                  <div className="text-xs text-slate-500 font-medium">For Sale</div>
                  <div className="text-sm font-bold text-brand-dark">
                    {filteredProperties.filter(p => p.status === 'For Sale').length}
                  </div>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg text-center">
                  <div className="text-xs text-slate-500 font-medium">For Rent</div>
                  <div className="text-sm font-bold text-brand-dark">
                    {filteredProperties.filter(p => p.status === 'For Rent').length}
                  </div>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg text-center">
                  <div className="text-xs text-slate-500 font-medium">Featured</div>
                  <div className="text-sm font-bold text-brand-accent">
                    {filteredProperties.filter(p => p.featured).length}
                  </div>
                </div>
              </div>
            </div>

            {/* Properties List */}
            <div className="overflow-y-auto p-4 space-y-3" style={{ maxHeight: 'calc(100vh - 300px)' }}>
              {filteredProperties.map((property) => (
                <Link
                  key={property.id}
                  href={`/property/${property.id}`}
                  className="block bg-white rounded-xl border-2 border-slate-100 overflow-hidden active:scale-[0.98] transition-transform"
                  onClick={() => setSelectedProperty(property.id)}
                >
                  <div className="flex gap-3 p-3">
                    <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                      <img 
                        src={property.image} 
                        alt={property.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="text-base font-bold text-brand-dark truncate">
                          {property.price}
                        </h4>
                        <span className="text-[10px] font-bold text-white bg-brand-dark px-2 py-0.5 rounded whitespace-nowrap">
                          {property.type}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mb-2 line-clamp-1">
                        {property.address}, {property.city}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-slate-600">
                        <span>{property.beds} beds</span>
                        <span>•</span>
                        <span>{property.baths} baths</span>
                        <span>•</span>
                        <span>{property.sqft} sqft</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden lg:flex w-[400px] flex-col bg-white border-l border-slate-200 shadow-xl z-30">
            {/* Header */}
            <div className="p-6 border-b border-slate-100 bg-gradient-to-br from-white to-slate-50">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-1">
                    {filteredProperties.length} Properties
                  </h2>
                  <p className="text-sm text-slate-500">Available in your search area</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="bg-white p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500 font-medium mb-1">For Sale</div>
                  <div className="text-lg font-bold text-brand-dark">
                    {filteredProperties.filter(p => p.status === 'For Sale').length}
                  </div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500 font-medium mb-1">For Rent</div>
                  <div className="text-lg font-bold text-brand-dark">
                    {filteredProperties.filter(p => p.status === 'For Rent').length}
                  </div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500 font-medium mb-1">Featured</div>
                  <div className="text-lg font-bold text-brand-accent">
                    {filteredProperties.filter(p => p.featured).length}
                  </div>
                </div>
              </div>
            </div>

            {/* Properties List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50" style={{ maxHeight: 'calc(100vh - 280px)' }}>
              {filteredProperties.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center p-8">
                  <MapPin size={48} className="text-slate-300 mb-4" />
                  <h3 className="text-lg font-bold text-slate-700 mb-2">No properties found</h3>
                  <p className="text-sm text-slate-500 mb-4">Try adjusting your search or filters</p>
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 bg-brand-dark text-white rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                filteredProperties.map((property) => (
                  <Link
                    key={property.id}
                    href={`/property/${property.id}`}
                    className={`group bg-white rounded-2xl overflow-hidden border-2 transition-all duration-300 cursor-pointer block ${
                      selectedProperty === property.id 
                        ? 'border-brand-dark ring-2 ring-brand-dark shadow-xl scale-[1.02]' 
                        : 'border-transparent hover:border-brand-accent hover:shadow-lg'
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      setSelectedProperty(property.id)
                    }}
                    onMouseEnter={() => setSelectedProperty(property.id)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={property.image} 
                        alt={property.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${
                          property.status === 'For Sale' 
                            ? 'bg-green-500 text-white' 
                            : 'bg-blue-500 text-white'
                        }`}>
                          {property.status}
                        </span>
                        {property.featured && (
                          <span className="px-3 py-1 bg-brand-accent text-white text-xs font-bold uppercase tracking-wider rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-accent transition-colors">
                          {property.price}
                        </h3>
                        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                          {property.type}
                        </span>
                      </div>
                      
                      <p className="text-sm font-bold text-slate-700 mb-1">{property.title}</p>
                      <p className="text-xs text-slate-500 mb-3 flex items-center gap-1">
                        <MapPin size={12} />
                        {property.address}, {property.city}, {property.state}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-slate-600 pt-3 border-t border-slate-100">
                        <div className="flex items-center gap-1">
                          <Bed size={16} className="text-slate-400" />
                          <span className="font-medium">{property.beds} beds</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bath size={16} className="text-slate-400" />
                          <span className="font-medium">{property.baths} baths</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Home size={16} className="text-slate-400" />
                          <span className="font-medium">{property.sqft} sqft</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>

        </main>
      </div>
    </>
  )
}

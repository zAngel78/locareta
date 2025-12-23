import { useState } from 'react'
import Head from 'next/head'
import { Search, Filter, List, Grid, ChevronRight } from 'lucide-react'
import ModernHeader from '@/components/ModernHeader'
import MapView from '@/components/MapView'

export default function MapPage() {
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null)

  // Enhanced mock data
  const properties = [
    { id: 1, price: '$450k', beds: 3, baths: 2, lat: 37.7749, lng: -122.4194, address: '123 Maple St, San Francisco', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop' },
    { id: 2, price: '$2.5k', beds: 2, baths: 1, lat: 37.7849, lng: -122.4094, address: '456 Oak Ave, San Francisco', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop' },
    { id: 3, price: '$675k', beds: 4, baths: 3, lat: 37.7649, lng: -122.4294, address: '789 Pine Rd, San Francisco', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop' },
    { id: 4, price: '$1.8k', beds: 1, baths: 1, lat: 37.7549, lng: -122.4394, address: '321 Elm St, San Francisco', image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=400&h=300&fit=crop' },
    { id: 5, price: '$525k', beds: 3, baths: 2, lat: 37.7949, lng: -122.4494, address: '555 Cedar Ln, San Francisco', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=300&fit=crop' },
    { id: 6, price: '$3.2k', beds: 3, baths: 2, lat: 37.7449, lng: -122.4594, address: '888 Birch Ct, San Francisco', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=300&fit=crop' },
    { id: 7, price: '$890k', beds: 5, baths: 4, lat: 37.7880, lng: -122.4070, address: '912 Broadway, San Francisco', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&h=300&fit=crop' },
    { id: 8, price: '$3.8k', beds: 3, baths: 2, lat: 37.7580, lng: -122.4350, address: '445 Mission St, San Francisco', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=300&fit=crop' },
  ]

  return (
    <>
      <Head>
        <title>Map Search | RealHome Luxury</title>
        <meta name="description" content="Explore properties on an interactive map" />
      </Head>
      
      <div className="h-screen flex flex-col bg-white overflow-hidden">
        <ModernHeader />
        
        <main className="flex-1 flex pt-[72px] relative">
          
          {/* Map Section (Takes priority) */}
          <div className="flex-1 relative h-full">
            {/* Floating Search Bar */}
            <div className="absolute top-4 left-4 right-4 md:left-8 md:right-auto md:w-96 z-[40]">
              <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 flex items-center gap-2">
                <Search className="text-slate-400 ml-2" size={20} />
                <input 
                  type="text" 
                  placeholder="Search by location..." 
                  className="flex-1 bg-transparent border-none outline-none text-slate-700 placeholder:text-slate-400"
                />
                <button className="p-2 bg-slate-50 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors">
                  <Filter size={18} />
                </button>
              </div>
            </div>

            <MapView 
              properties={properties} 
              onPropertySelect={setSelectedProperty} 
              selectedId={selectedProperty}
            />
          </div>

          {/* Sidebar Properties List */}
          <div className="hidden lg:flex w-[400px] flex-col bg-white border-l border-slate-200 shadow-2xl z-30">
            <div className="p-5 border-b border-slate-100 bg-white">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-serif font-bold text-brand-dark">
                  {properties.length} Properties
                </h2>
                <div className="flex gap-2">
                  <button className="p-1.5 rounded hover:bg-slate-50 text-slate-400 hover:text-brand-dark transition-colors">
                    <Grid size={18} />
                  </button>
                  <button className="p-1.5 rounded bg-slate-50 text-brand-dark">
                    <List size={18} />
                  </button>
                </div>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {['Price', 'Beds', 'Home Type', 'More'].map((filter) => (
                  <button key={filter} className="px-3 py-1.5 rounded-full border border-slate-200 text-xs font-bold text-slate-600 hover:border-brand-dark hover:text-brand-dark transition-colors whitespace-nowrap">
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {properties.map((property) => (
                <div 
                  key={property.id}
                  className={`group bg-white rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                    selectedProperty === property.id 
                      ? 'border-brand-dark ring-1 ring-brand-dark shadow-lg' 
                      : 'border-slate-200 hover:border-brand-accent hover:shadow-md'
                  }`}
                  onClick={() => setSelectedProperty(property.id)}
                >
                  <div className="flex h-28">
                    <div className="w-32 relative overflow-hidden">
                      <img 
                        src={property.image} 
                        alt={property.address} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1 p-3 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-serif font-bold text-brand-dark">{property.price}</h3>
                          <button className="text-slate-400 hover:text-brand-accent">
                            <ChevronRight size={16} />
                          </button>
                        </div>
                        <p className="text-xs text-slate-500 font-medium mt-1">
                          {property.beds} bds • {property.baths} ba
                        </p>
                        <p className="text-xs text-slate-600 mt-1 line-clamp-1">{property.address}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-bold uppercase rounded">
                          Active
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>
    </>
  )
}

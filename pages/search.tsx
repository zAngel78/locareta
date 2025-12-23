import { useState } from 'react'
import Head from 'next/head'
import { Filter, ChevronDown, Map, List, Search as SearchIcon } from 'lucide-react'
import ModernHeader from '@/components/ModernHeader'
import FooterModern from '@/components/FooterModern'
import PropertyCard from '@/components/PropertyCard'

export default function Search() {
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [filters, setFilters] = useState({
    priceMin: '',
    priceMax: '',
    beds: 'any',
    baths: 'any',
    propertyType: 'all'
  })

  // Mock data mejorada
  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      price: '$450,000',
      beds: 3,
      baths: 2,
      sqft: 1800,
      address: '123 Maple Street',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94102',
      status: 'For Sale' as const,
      type: 'Casa Moderna'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      price: '$2,500/mes',
      beds: 2,
      baths: 1,
      sqft: 1200,
      address: '456 Oak Avenue',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001',
      status: 'For Rent' as const,
      type: 'Apartamento'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      price: '$675,000',
      beds: 4,
      baths: 3,
      sqft: 2400,
      address: '789 Pine Road',
      city: 'Seattle',
      state: 'WA',
      zipCode: '98101',
      status: 'For Sale' as const,
      type: 'Residencia Familiar'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop',
      price: '$1,800/mes',
      beds: 1,
      baths: 1,
      sqft: 850,
      address: '321 Elm Street',
      city: 'Portland',
      state: 'OR',
      zipCode: '97201',
      status: 'For Rent' as const,
      type: 'Loft Urbano'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop',
      price: '$525,000',
      beds: 3,
      baths: 2.5,
      sqft: 1950,
      address: '555 Cedar Lane',
      city: 'Austin',
      state: 'TX',
      zipCode: '78701',
      status: 'For Sale' as const,
      type: 'Casa de Campo'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
      price: '$3,200/mes',
      beds: 3,
      baths: 2,
      sqft: 1600,
      address: '888 Birch Court',
      city: 'Denver',
      state: 'CO',
      zipCode: '80202',
      status: 'For Rent' as const,
      type: 'Penthouse'
    }
  ]

  return (
    <>
      <Head>
        <title>Buscar Propiedades | RealHome Luxury</title>
        <meta name="description" content="Encuentra tu propiedad ideal con RealHome" />
      </Head>
      
      <div className="min-h-screen bg-slate-50">
        <ModernHeader />
        
        {/* Header de Búsqueda */}
        <div className="bg-brand-dark text-white pt-32 pb-12">
          <div className="container mx-auto px-6">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Propiedades Disponibles</h1>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Buscar por ciudad, código postal o dirección..." 
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:bg-white/20 transition-all"
                />
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`flex-1 md:flex-none px-4 py-3 rounded-xl flex items-center justify-center gap-2 transition-colors ${viewMode === 'grid' ? 'bg-white text-brand-dark font-medium' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  <List size={18} />
                  <span className="hidden md:inline">Lista</span>
                </button>
                <button 
                  onClick={() => setViewMode('map')}
                  className={`flex-1 md:flex-none px-4 py-3 rounded-xl flex items-center justify-center gap-2 transition-colors ${viewMode === 'map' ? 'bg-white text-brand-dark font-medium' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  <Map size={18} />
                  <span className="hidden md:inline">Mapa</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <main className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar de Filtros */}
            <aside className="w-full lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-xl font-bold text-brand-dark flex items-center gap-2">
                    <Filter size={20} /> Filtros
                  </h2>
                  <button className="text-sm text-brand-accent hover:text-brand-dark transition-colors">
                    Limpiar
                  </button>
                </div>
                
                <div className="space-y-6">
                  {/* Tipo de Propiedad */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Tipo de Propiedad</label>
                    <div className="relative">
                      <select 
                        className="w-full appearance-none px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-dark/10 focus:border-brand-dark transition-all"
                        value={filters.propertyType}
                        onChange={(e) => setFilters({...filters, propertyType: e.target.value})}
                      >
                        <option value="all">Todas las propiedades</option>
                        <option value="house">Casas</option>
                        <option value="apartment">Apartamentos</option>
                        <option value="condo">Condominios</option>
                        <option value="land">Terrenos</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                    </div>
                  </div>

                  {/* Rango de Precio */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Rango de Precio</label>
                    <div className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                        <input 
                          type="text" 
                          placeholder="Mín" 
                          className="w-full pl-6 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-dark transition-all"
                          value={filters.priceMin}
                          onChange={(e) => setFilters({...filters, priceMin: e.target.value})}
                        />
                      </div>
                      <span className="text-slate-300">-</span>
                      <div className="relative flex-1">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                        <input 
                          type="text" 
                          placeholder="Máx" 
                          className="w-full pl-6 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-dark transition-all"
                          value={filters.priceMax}
                          onChange={(e) => setFilters({...filters, priceMax: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Habitaciones */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Habitaciones</label>
                    <div className="grid grid-cols-5 gap-2">
                      {['Any', '1', '2', '3', '4+'].map((num) => (
                        <button 
                          key={num}
                          className={`py-2 rounded-lg text-sm font-medium transition-all ${
                            (num === 'Any' && filters.beds === 'any') || filters.beds === num 
                              ? 'bg-brand-dark text-white shadow-md' 
                              : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                          }`}
                          onClick={() => setFilters({...filters, beds: num === 'Any' ? 'any' : num})}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Baños */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Baños</label>
                    <div className="grid grid-cols-4 gap-2">
                      {['1+', '2+', '3+', '4+'].map((num) => (
                        <button 
                          key={num}
                          className={`py-2 rounded-lg text-sm font-medium transition-all ${
                            filters.baths === num 
                              ? 'bg-brand-dark text-white shadow-md' 
                              : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                          }`}
                          onClick={() => setFilters({...filters, baths: num})}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button className="w-full py-3.5 bg-brand-dark text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-brand-dark/20">
                    Aplicar Filtros
                  </button>
                </div>
              </div>
            </aside>

            {/* Resultados */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <p className="text-slate-500">
                  Mostrando <span className="font-bold text-brand-dark">{properties.length}</span> propiedades
                </p>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-500 hidden sm:inline">Ordenar por:</span>
                  <div className="relative min-w-[180px]">
                    <select className="w-full appearance-none pl-4 pr-10 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:border-brand-dark cursor-pointer">
                      <option>Relevancia</option>
                      <option>Precio: Menor a Mayor</option>
                      <option>Precio: Mayor a Menor</option>
                      <option>Más Recientes</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {properties.map((property) => (
                  <PropertyCard key={property.id} {...property} />
                ))}
              </div>

              {/* Paginación Simple */}
              <div className="mt-12 flex justify-center gap-2">
                <button className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50">Anterior</button>
                <button className="px-4 py-2 rounded-lg bg-brand-dark text-white">1</button>
                <button className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50">2</button>
                <button className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50">3</button>
                <button className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50">Siguiente</button>
              </div>
            </div>
          </div>
        </main>
        
        <FooterModern />
      </div>
    </>
  )
}

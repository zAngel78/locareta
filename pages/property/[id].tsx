import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MapPin, Check, Share2, Heart, ChevronRight } from 'lucide-react'
import ModernHeader from '@/components/ModernHeader'
import FooterModern from '@/components/FooterModern'
import PropertyGallery from '@/components/PropertyGallery'
import AgentContactCard from '@/components/AgentContactCard'

export default function PropertyDetail() {
  const router = useRouter()
  // const { id } = router.query // En un caso real, usaríamos esto para fetch

  const property = {
    id: 1,
    title: 'Villa Moderna con Vistas a la Bahía',
    price: '$450,000',
    pricePerSqft: '$250',
    address: '123 Maple Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94102',
    beds: 3,
    baths: 2,
    sqft: 1800,
    lotSize: '5,000',
    yearBuilt: 2018,
    status: 'En Venta',
    type: 'Residencial',
    description: 'Esta impresionante villa moderna ofrece una combinación perfecta de lujo y comodidad. Con acabados de alta gama, la propiedad cuenta con una cocina gourmet equipada con electrodomésticos de última generación, encimeras de cuarzo y una isla central ideal para el entretenimiento. Los amplios ventanales permiten la entrada de luz natural durante todo el día y ofrecen vistas panorámicas de la ciudad y la bahía.\n\nEl dormitorio principal es un verdadero refugio, con un baño tipo spa y un vestidor espacioso. El patio trasero ha sido diseñado profesionalmente con zonas de estar, jardines maduros y espacio para futuras ampliaciones. Ubicada en uno de los vecindarios más codiciados, esta casa está a minutos de las mejores escuelas, parques y restaurantes de la ciudad.',
    features: [
      'Cocina Gourmet',
      'Pisos de Roble Francés',
      'Climatización Inteligente',
      'Garage para 2 Autos',
      'Jardín Paisajista',
      'Sistema de Seguridad',
      'Vistas Panorámicas',
      'Cerca de Transporte',
      'Chimenea a Gas',
      'Techos Altos'
    ],
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200'
    ],
    agent: {
      name: 'María González',
      role: 'Agente Senior de Lujo',
      phone: '(555) 123-4567',
      email: 'maria@realhome.com',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
    }
  }

  return (
    <>
      <Head>
        <title>{property.title} | RealHome Luxury</title>
        <meta name="description" content={property.description.substring(0, 150)} />
      </Head>
      
      <div className="min-h-screen bg-white">
        <ModernHeader />
        
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-6">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6 overflow-x-auto whitespace-nowrap">
              <Link href="/" className="hover:text-brand-dark transition-colors">Inicio</Link>
              <ChevronRight size={14} />
              <Link href="/search" className="hover:text-brand-dark transition-colors">Propiedades en Venta</Link>
              <ChevronRight size={14} />
              <span className="text-brand-dark font-medium">{property.city}</span>
              <ChevronRight size={14} />
              <span className="text-slate-400 truncate">{property.address}</span>
            </nav>

            {/* Header de Propiedad */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-brand-dark text-white text-xs font-bold uppercase tracking-wider rounded-md">
                    {property.status}
                  </span>
                  <span className="text-slate-500 text-sm font-medium">{property.type}</span>
                </div>
                <h1 className="font-serif text-3xl md:text-5xl font-bold text-brand-dark mb-2">
                  {property.title}
                </h1>
                <div className="flex items-center gap-2 text-slate-500 text-lg">
                  <MapPin size={20} className="text-brand-accent" />
                  {property.address}, {property.city}, {property.state} {property.zipCode}
                </div>
              </div>

              <div className="flex flex-col items-end gap-4 w-full md:w-auto">
                <div className="text-4xl font-bold text-brand-dark font-serif">
                  {property.price}
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                  <button className="flex-1 md:flex-none px-6 py-2.5 border border-slate-200 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors text-slate-700 font-medium">
                    <Share2 size={18} /> Compartir
                  </button>
                  <button className="flex-1 md:flex-none px-6 py-2.5 border border-slate-200 rounded-xl flex items-center justify-center gap-2 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors text-slate-700 font-medium group">
                    <Heart size={18} className="group-hover:fill-current" /> Guardar
                  </button>
                </div>
              </div>
            </div>

            {/* Galería de Imágenes */}
            <div className="mb-12">
              <PropertyGallery images={property.images} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Columna Principal */}
              <div className="lg:col-span-2 space-y-12">
                
                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-center p-2 border-r border-slate-200 last:border-0">
                    <div className="text-3xl font-bold text-brand-dark font-serif">{property.beds}</div>
                    <div className="text-xs uppercase tracking-wider text-slate-500 font-medium mt-1">Habitaciones</div>
                  </div>
                  <div className="text-center p-2 border-r border-slate-200 last:border-0">
                    <div className="text-3xl font-bold text-brand-dark font-serif">{property.baths}</div>
                    <div className="text-xs uppercase tracking-wider text-slate-500 font-medium mt-1">Baños</div>
                  </div>
                  <div className="text-center p-2 border-r border-slate-200 last:border-0">
                    <div className="text-3xl font-bold text-brand-dark font-serif">{property.sqft}</div>
                    <div className="text-xs uppercase tracking-wider text-slate-500 font-medium mt-1">Pies Cuadrados</div>
                  </div>
                  <div className="text-center p-2">
                    <div className="text-3xl font-bold text-brand-dark font-serif">{property.yearBuilt}</div>
                    <div className="text-xs uppercase tracking-wider text-slate-500 font-medium mt-1">Año Construcción</div>
                  </div>
                </div>

                {/* Descripción */}
                <section>
                  <h2 className="font-serif text-2xl font-bold text-brand-dark mb-6">Sobre esta propiedad</h2>
                  <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed whitespace-pre-line">
                    {property.description}
                  </div>
                </section>

                {/* Características */}
                <section>
                  <h2 className="font-serif text-2xl font-bold text-brand-dark mb-6">Características y Amenidades</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                          <Check size={16} strokeWidth={3} />
                        </div>
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Detalles Técnicos */}
                <section className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
                  <h2 className="font-serif text-2xl font-bold text-brand-dark mb-6">Detalles Adicionales</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex justify-between py-3 border-b border-slate-100">
                      <span className="text-slate-500">Tipo de Propiedad</span>
                      <span className="font-semibold text-brand-dark">{property.type}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-slate-100">
                      <span className="text-slate-500">Tamaño del Lote</span>
                      <span className="font-semibold text-brand-dark">{property.lotSize} sqft</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-slate-100">
                      <span className="text-slate-500">Precio por sqft</span>
                      <span className="font-semibold text-brand-dark">{property.pricePerSqft}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-slate-100">
                      <span className="text-slate-500">Estado</span>
                      <span className="font-semibold text-brand-dark">{property.status}</span>
                    </div>
                  </div>
                </section>

              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <AgentContactCard agent={property.agent} />
              </aside>
            </div>
          </div>
        </main>

        <FooterModern />
      </div>
    </>
  )
}

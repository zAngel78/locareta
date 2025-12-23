import PropertyCard from './PropertyCard'

export default function PropertyGrid() {
  const properties = [
    {
      image: '/saveweb2zip-com-www-zillow-com/images/image2-lg@1x.jpg',
      price: '$450,000',
      beds: 3,
      baths: 2,
      sqft: 1800,
      address: '123 Maple Street',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94102',
      status: 'For Sale' as const
    },
    {
      image: '/saveweb2zip-com-www-zillow-com/images/image2-lg@1x.jpg',
      price: '$2,500/mes',
      beds: 2,
      baths: 1,
      sqft: 1200,
      address: '456 Oak Avenue',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001',
      status: 'For Rent' as const
    },
    {
      image: '/saveweb2zip-com-www-zillow-com/images/image2-lg@1x.jpg',
      price: '$675,000',
      beds: 4,
      baths: 3,
      sqft: 2400,
      address: '789 Pine Road',
      city: 'Seattle',
      state: 'WA',
      zipCode: '98101',
      status: 'For Sale' as const
    },
    {
      image: '/saveweb2zip-com-www-zillow-com/images/image2-lg@1x.jpg',
      price: '$1,800/mes',
      beds: 1,
      baths: 1,
      sqft: 850,
      address: '321 Elm Street',
      city: 'Portland',
      state: 'OR',
      zipCode: '97201',
      status: 'For Rent' as const
    }
  ]

  return (
    <section className="property-grid-section">
      <div className="property-grid-container">
        <h2 className="property-grid-title">Propiedades Destacadas</h2>
        <div className="property-grid">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  )
}

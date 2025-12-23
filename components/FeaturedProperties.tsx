export default function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      image: '/saveweb2zip-com-www-zillow-com/images/image2-lg@1x.jpg',
      price: '$450,000',
      beds: 3,
      baths: 2,
      sqft: 1800,
      address: '123 Maple Street',
      city: 'San Francisco',
      state: 'CA',
      type: 'House',
      featured: true
    },
    {
      id: 2,
      image: '/saveweb2zip-com-www-zillow-com/images/image2-lg@1x.jpg',
      price: '$2,500/mo',
      beds: 2,
      baths: 1,
      sqft: 1200,
      address: '456 Oak Avenue',
      city: 'Los Angeles',
      state: 'CA',
      type: 'Apartment',
      featured: false
    },
    {
      id: 3,
      image: '/saveweb2zip-com-www-zillow-com/images/image2-lg@1x.jpg',
      price: '$675,000',
      beds: 4,
      baths: 3,
      sqft: 2400,
      address: '789 Pine Road',
      city: 'Seattle',
      state: 'WA',
      type: 'House',
      featured: true
    }
  ]

  return (
    <section className="featured-section">
      <div className="section-container">
        <div className="section-header">
          <div>
            <h2 className="section-title">Featured Properties</h2>
            <p className="section-subtitle">Handpicked properties for you</p>
          </div>
          <a href="/search" className="view-all-link">
            View all properties
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>

        <div className="properties-grid">
          {properties.map((property) => (
            <a href={`/property/${property.id}`} key={property.id} className="modern-property-card">
              <div className="card-image-wrapper">
                <img src={property.image} alt={property.address} className="card-image" />
                {property.featured && (
                  <div className="featured-badge">Featured</div>
                )}
                <button className="card-favorite-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </button>
              </div>
              <div className="card-content">
                <div className="card-header">
                  <div className="card-price">{property.price}</div>
                  <div className="card-type">{property.type}</div>
                </div>
                <div className="card-specs">
                  <div className="spec-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>{property.beds} beds</span>
                  </div>
                  <div className="spec-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M9 11v6h6v-6h4l-7-7-7 7h4z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>{property.baths} baths</span>
                  </div>
                  <div className="spec-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="18" height="18" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
                <div className="card-location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  {property.address}, {property.city}, {property.state}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

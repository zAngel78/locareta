import { useState } from 'react'

export default function AdvancedHero() {
  const [searchType, setSearchType] = useState<'buy' | 'rent'>('buy')
  const [location, setLocation] = useState('')
  const [priceRange, setPriceRange] = useState('any')
  const [bedrooms, setBedrooms] = useState('any')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ searchType, location, priceRange, bedrooms })
  }

  return (
    <section className="advanced-hero">
      <div className="hero-container">
        <div className="hero-content-wrapper">
          <div className="hero-text-section">
            <div className="hero-badge">Discover Your Dream Home</div>
            <h1 className="hero-main-title">
              Find the Perfect Place to Call Home
            </h1>
            <p className="hero-description">
              Search millions of for-sale and rental listings, compare home values and connect with local professionals.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">1M+</div>
                <div className="stat-label">Active Listings</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Cities Covered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10M+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
            </div>
          </div>

          <div className="hero-search-card">
            <div className="search-card-tabs">
              <button
                className={`search-tab-btn ${searchType === 'buy' ? 'active' : ''}`}
                onClick={() => setSearchType('buy')}
              >
                Buy
              </button>
              <button
                className={`search-tab-btn ${searchType === 'rent' ? 'active' : ''}`}
                onClick={() => setSearchType('rent')}
              >
                Rent
              </button>
            </div>

            <form onSubmit={handleSearch} className="advanced-search-form">
              <div className="form-group">
                <label className="form-label">Location</label>
                <div className="input-with-icon">
                  <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                  </svg>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter city, address, or ZIP code"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Price Range</label>
                  <select
                    className="form-select"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                  >
                    <option value="any">Any Price</option>
                    <option value="0-200k">$0 - $200K</option>
                    <option value="200k-400k">$200K - $400K</option>
                    <option value="400k-600k">$400K - $600K</option>
                    <option value="600k+">$600K+</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Bedrooms</label>
                  <select
                    className="form-select"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                  >
                    <option value="any">Any</option>
                    <option value="1">1+ Beds</option>
                    <option value="2">2+ Beds</option>
                    <option value="3">3+ Beds</option>
                    <option value="4">4+ Beds</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="search-submit-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                  <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Search Properties
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="hero-background-pattern"></div>
    </section>
  )
}

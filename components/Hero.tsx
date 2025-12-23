import { useState } from 'react'

export default function Hero() {
  const [searchType, setSearchType] = useState<'buy' | 'rent'>('buy')
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Buscando:', searchQuery, 'Tipo:', searchType)
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Rentas. Casas. <br />
            Agentes. Préstamos.
          </h1>
          <p className="hero-subtitle">
            Tu próximo hogar te está esperando
          </p>
        </div>

        <div className="search-container">
          {/* Search Type Tabs */}
          <div className="search-tabs">
            <button 
              className={`search-tab ${searchType === 'buy' ? 'active' : ''}`}
              onClick={() => setSearchType('buy')}
            >
              Comprar
            </button>
            <button 
              className={`search-tab ${searchType === 'rent' ? 'active' : ''}`}
              onClick={() => setSearchType('rent')}
            >
              Rentar
            </button>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-input-wrapper">
              <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input
                type="text"
                className="search-input"
                placeholder="Ingresa una dirección, ciudad o código postal"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-search">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Background Image */}
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
    </section>
  )
}

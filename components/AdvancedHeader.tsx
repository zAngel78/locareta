import { useState } from 'react'

export default function AdvancedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (dropdown: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 300)
    setDropdownTimeout(timeout)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="8" fill="currentColor"/>
                  <path d="M16 8L8 14v10h5v-6h6v6h5V14l-8-6z" fill="white"/>
                </svg>
                <span className="text-xl font-bold text-gray-900">RealEstate</span>
              </a>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              <div className="relative"
                onMouseEnter={() => handleMouseEnter('buy')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Buy
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
                {activeDropdown === 'buy' && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 p-6 w-96 grid grid-cols-2 gap-6" onMouseEnter={() => handleMouseEnter('buy')}>
                    <div className="space-y-3">
                      <h4 className="font-bold text-gray-900 text-sm mb-3">Browse Homes</h4>
                      <a href="/search" className="block text-gray-600 hover:text-blue-600 text-sm transition-colors">Homes for sale</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 text-sm transition-colors">Foreclosures</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 text-sm transition-colors">New construction</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 text-sm transition-colors">Open houses</a>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-bold text-gray-900 text-sm mb-3">Resources</h4>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 text-sm transition-colors">Buyers guide</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 text-sm transition-colors">Real estate news</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 text-sm transition-colors">Mortgage calculator</a>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative"
                onMouseEnter={() => handleMouseEnter('rent')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Rent
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
                {activeDropdown === 'rent' && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 p-6 w-96 grid grid-cols-2 gap-6" onMouseEnter={() => handleMouseEnter('rent')}>
                    <div className="space-y-3">
                      <h4 className="font-bold text-gray-900 text-sm mb-3">Find Rentals</h4>
                      <a href="/search" className="block text-gray-600 hover:text-blue-600 text-sm transition-colors">Apartments for rent</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 text-sm transition-colors">Houses for rent</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 text-sm transition-colors">Pet-friendly rentals</a>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-bold text-gray-900 text-sm mb-3">Renter Resources</h4>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 text-sm transition-colors">Rental calculator</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 text-sm transition-colors">Renters insurance</a>
                    </div>
                  </div>
                )}
              </div>

              <a href="/map" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">Map View</a>
              <a href="#" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">Sell</a>
              <a href="#" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">Home Loans</a>
            </nav>

            <div className="flex items-center gap-3">
              <button className="hidden md:block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">Sign in</button>
              <button className="hidden md:block px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">Get started</button>
              <button 
                className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
          <nav className="container mx-auto px-4 py-6 space-y-2">
            <a href="/" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors">Home</a>
            <a href="/search" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors">Buy</a>
            <a href="/search" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors">Rent</a>
            <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors">Sell</a>
            <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors">Home Loans</a>
            <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors">Agent Finder</a>
            <div className="pt-4 space-y-2">
              <button className="w-full px-4 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">Sign in</button>
              <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">Get started</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

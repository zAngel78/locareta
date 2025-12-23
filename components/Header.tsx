import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <svg width="120" height="30" viewBox="0 0 120 30" fill="none">
              <path d="M15 2L2 12v16h10v-8h6v8h10V12L15 2z" fill="#FF6B6B"/>
              <text x="32" y="22" fill="#2D3142" fontSize="18" fontWeight="700" fontFamily="Open Sans">RealHome</text>
            </svg>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-8">
              <li><a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Inicio</a></li>
              <li><a href="/search" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Buscar</a></li>
              <li><a href="/map" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Mapa</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Vender</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Préstamos</a></li>
            </ul>
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden md:block px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors">Iniciar Sesión</button>
            <button className="md:hidden p-2 text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav>
              <ul className="space-y-2">
                <li><a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">Inicio</a></li>
                <li><a href="/search" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">Buscar</a></li>
                <li><a href="/map" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">Mapa</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">Vender</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">Préstamos</a></li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

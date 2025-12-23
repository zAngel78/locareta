export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold mb-4">Buy</h4>
            <ul className="space-y-2">
              <li><a href="/search" className="hover:text-white transition-colors">Homes for sale</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Open houses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New construction</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Coming soon</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Sell</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Start with an agent</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Home value estimator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sell by owner</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Seller resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Rent</h4>
            <ul className="space-y-2">
              <li><a href="/search" className="hover:text-white transition-colors">Apartments for rent</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Houses for rent</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Submit your rental</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Renters insurance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Mortgage calculator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Buyers guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help center</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4" fill="white"/>
                  <circle cx="18" cy="6" r="1.5" fill="white"/>
                </svg>
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className="mb-2">&copy; 2025 RealEstate. All rights reserved.</p>
              <div className="flex gap-4 text-sm">
                <a href="#" className="hover:text-white transition-colors">Terms of use</a>
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

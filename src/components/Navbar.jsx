export default function Navbar() {
  return (
    <nav className="bg-yellow-400 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
            <span className="text-yellow-400 font-black text-sm">B</span>
          </div>
          <span className="text-blue-800 font-black text-xl tracking-tight">BlueSpark</span>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {['Home', 'Features', 'Pricing', 'About'].map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-blue-900 font-semibold hover:text-blue-700 transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className="bg-blue-700 text-yellow-300 font-bold px-5 py-2 rounded-full hover:bg-blue-800 transition-colors duration-200 shadow-md">
          Get Started
        </button>
      </div>
    </nav>
  )
}


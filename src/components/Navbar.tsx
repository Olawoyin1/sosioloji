import { FiMenu } from 'react-icons/fi'

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-200">
        <div className="container">

      <div className="relative flex items-center justify-center max-w-6xl mx-auto">
        {/* Center: Title */}
        <h1 className="text-lg font-semibold tracking-widest text-gray-800">
          SOCIOLOGY
        </h1>

        {/* Right: Menu Icon */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-2xl text-gray-700 cursor-pointer">
          <FiMenu />
        </div>
      </div>
        </div>
    </nav>
  )
}

export default Navbar

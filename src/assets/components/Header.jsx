import { useState } from 'react'
import Cart from "../images/Cart.svg"
import profile from "../images/profile.svg"
import search from "../images/Vector.png"
import { NavLink } from 'react-router'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  const menuItems = ['Shop', 'On Sale', 'New Arrivals', 'Brands']

  return (
    <div className="max-w-screen-2xl mx-auto shadow-lg sticky top-0 bg-white">
      <div className="flex justify-between lg:justify-around py-5 px-4 lg:px-16 items-center">
        <div className='flex gap-3'>
          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span 
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span 
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span 
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
          <div>
          <h1 className="font-CF text-3xl lg:text-4xl">SHOP.CO</h1>
        </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <ul className="flex gap-8 cursor-pointer">
            {menuItems.map((item) => (
              <NavLink to={`/productdetails`} key={item} className="hover:text-gray-600 transition-colors">
                {item}
              </NavLink>
            ))}
          </ul>
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden lg:flex items-center rounded-full bg-[#F0F0F0] px-4 py-2">
          <img src={search} alt="search" className="w-4 h-4" />
          <input 
            className="bg-[#F0F0F0] w-full px-24 outline-none" 
            type="text" 
            placeholder="Search for products..." 
          />
        </div>

        {/* Mobile/Tablet Controls */}
        <div className="flex items-center gap-4">
          {/* Mobile Search Icon */}
          <button 
            onClick={toggleSearch}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <img src={search} alt="search" className="w-5 h-5" />
          </button>

          {/* Cart and Profile Icons */}
          <div className="flex gap-4">
            <img src={Cart} alt="cart" className="cursor-pointer hover:opacity-70 transition-opacity" />
            <img src={profile} alt="profile" className="cursor-pointer hover:opacity-70 transition-opacity" />
          </div>

          
        </div>
      </div>

      {/* Mobile Search Drawer */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isSearchOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4">
          <div className="flex items-center rounded-full bg-[#F0F0F0] px-4 py-3">
            <img src={search} alt="search" className="w-4 h-4 mr-3" />
            <input 
              className="bg-[#F0F0F0] w-full outline-none" 
              type="text" 
              placeholder="Search for products..."
              autoFocus={isSearchOpen}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 pb-4 bg-white">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li
                key={item}
                className="py-2 px-4 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
              >
                <NavLink to={`/productdetails`} onClick={() => setIsMenuOpen(false)}>{item}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile menu */}
      {(isMenuOpen || isSearchOpen) && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-25 z-[-1]"
          onClick={() => {
            setIsMenuOpen(false)
            setIsSearchOpen(false)
          }}
        ></div>
      )}
    </div>
  )
}
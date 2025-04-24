import { useState } from "react";
import React from 'react'

function Header() {
      const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
          <header className="flex justify-between items-center bg-[#121c3d] px-4 py-3 md:px-6 md:py-4 shadow-lg sticky top-0 z-50">
      <div className="text-lg md:text-xl font-extrabold text-white">Airzelo</div>
      
      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-4 md:gap-6 text-sm text-white font-medium">
        <a href="#" className="hover:text-blue-300">Home</a>
        <a href="#" className="hover:text-blue-300">My Bookings</a>
        <a href="#" className="hover:text-blue-300">Check-in</a>
        <a href="https://wa.me/966531311040" className="hover:text-blue-300">Support</a>
      </nav>

      {/* Hamburger Icon (Mobile) */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#121c3d] flex flex-col text-white font-medium p-4 md:hidden shadow-md z-40">
          <a href="#" className="py-2 hover:text-blue-300">Home</a>
          <a href="#" className="py-2 hover:text-blue-300">My Bookings</a>
          <a href="#" className="py-2 hover:text-blue-300">Check-in</a>
          <a href="https://wa.me/966531311040" className="py-2 hover:text-blue-300">Support</a>
        </div>
      )}
    </header>
    </div>
  )
}

export default Header

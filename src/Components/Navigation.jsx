import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation();

  // Helper function to apply active styles
  const activeLink = (path) => 
    location.pathname === path 
      ? "text-amber-500 font-bold" 
      : "text-zinc-400 hover:text-zinc-100 transition-colors";

  return (
    <nav className="sticky top-0 z-50 w-full flex justify-center pt-5 px-4 bg-zinc-900 backdrop-blur-md">
      <div className="flex gap-8 items-center justify-center bg-zinc-800/50 px-8 py-3 border border-zinc-700 rounded-2xl shadow-xl">
        <Link 
          to="/" 
          className={`text-lg uppercase tracking-widest ${activeLink("/")}`}
        >
          Home
        </Link>
        
        <div className="w-px h-6 bg-zinc-700"></div> {/* Vertical Divider */}

        <Link 
          to="/pastes" 
          className={`text-lg uppercase tracking-widest ${activeLink("/pastes")}`}
        >
          My Pastes
        </Link>
      </div>
    </nav>
  )
}

export default Navigation
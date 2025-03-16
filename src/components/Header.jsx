import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from './Logo'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <header className="bg-casino-black border-b border-neon-purple py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Logo />
            <span className="ml-2 text-xl font-bold neon-text-blue">LOTSETS</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-neon-pink transition">Home</Link>
            <Link to="/games" className="text-white hover:text-neon-blue transition">Games</Link>
            <Link to="/promotions" className="text-white hover:text-neon-green transition">Promotions</Link>
            <Link to="/login" className="neon-button-pink">Login</Link>
            <Link to="/register" className="neon-button-blue">Register</Link>
          </div>
          
          <button 
            className="block md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-neon-pink transition">Home</Link>
              <Link to="/games" className="text-white hover:text-neon-blue transition">Games</Link>
              <Link to="/promotions" className="text-white hover:text-neon-green transition">Promotions</Link>
              <Link to="/login" className="neon-button-pink text-center">Login</Link>
              <Link to="/register" className="neon-button-blue text-center">Register</Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}

export default Header
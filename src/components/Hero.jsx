import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative bg-casino-black overflow-hidden">
      {/* Neon grid background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(to right, #9D00FF 1px, transparent 1px), linear-gradient(to bottom, #9D00FF 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Neon glow effects */}
      <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-neon-pink opacity-20 filter blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-neon-blue opacity-20 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold"
            >
              <span className="text-white">Experience The</span>
              <br />
              <span className="neon-text-pink">Neon</span>
              <span className="neon-text-blue"> Casino</span>
              <span className="neon-text-green"> Rush</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-gray-300"
            >
              Enter a world of electrifying games, dazzling bonuses, and non-stop entertainment. Your neon gaming adventure starts here.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link to="/register" className="neon-button-pink text-center">Sign Up Now</Link>
              <Link to="/games" className="neon-button-blue text-center">Explore Games</Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex items-center space-x-8"
            >
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-neon-green">12+</span>
                <span className="text-xs text-gray-400">Games</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-neon-blue">24/7</span>
                <span className="text-xs text-gray-400">Support</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-neon-pink">100%</span>
                <span className="text-xs text-gray-400">Secure</span>
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 mt-8 md:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="w-full h-80 md:h-96 bg-casino-dark rounded-lg border-2 border-neon-purple flex items-center justify-center">
                <span className="text-gray-500">HERO IMAGE PLACEHOLDER</span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-casino-black border-2 border-neon-pink p-4 rounded-lg shadow-neon-pink">
                <span className="text-neon-pink font-bold text-lg">$1000</span>
                <span className="block text-white text-sm">Welcome Bonus</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
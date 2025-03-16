import { motion } from 'framer-motion'

const GameCard = ({ game }) => {
  return (
    <motion.div 
      className="game-card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        {game.image ? (
          <img 
            src={game.image} 
            alt={game.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-casino-dark flex items-center justify-center">
            <span className="text-gray-500">{game.title} Image</span>
          </div>
        )}
        <div className="absolute top-2 right-2">
          {game.isNew && (
            <span className="bg-neon-green text-black text-xs font-bold px-2 py-1 rounded">NEW</span>
          )}
          {game.isHot && (
            <span className="bg-neon-pink text-black text-xs font-bold px-2 py-1 rounded ml-1">HOT</span>
          )}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-white">{game.title}</h3>
        <p className="text-sm text-gray-400 mt-1">{game.provider}</p>
        <button className="neon-button-blue w-full mt-3 text-sm">Play Now</button>
      </div>
    </motion.div>
  )
}

export default GameCard
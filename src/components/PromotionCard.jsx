import { motion } from 'framer-motion'

const PromotionCard = ({ promo }) => {
  return (
    <motion.div 
      className="bg-casino-dark rounded-lg overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full h-48">
        {promo.image ? (
          <img 
            src={promo.image} 
            alt={promo.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-casino-dark flex items-center justify-center border-b border-neon-purple">
            <span className="text-gray-500">{promo.title} Image</span>
          </div>
        )}
        {promo.badge && (
          <div className="absolute top-4 right-4 bg-neon-pink text-black font-bold px-3 py-1 rounded-full text-sm">
            {promo.badge}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{promo.title}</h3>
        <p className="mt-2 text-gray-400">{promo.description}</p>
        <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-gray-500">{promo.validUntil}</span>
          <button className="neon-button-green text-sm px-4 py-1">Claim Now</button>
        </div>
      </div>
    </motion.div>
  )
}

export default PromotionCard
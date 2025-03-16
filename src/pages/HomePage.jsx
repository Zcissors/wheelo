
import Hero from '../components/Hero'
import GameCard from '../components/GameCard'
import PromotionCard from '../components/PromotionCard'
import JackpotCounter from '../components/JackpotCounter'
import { Link } from 'react-router-dom'

const HomePage = () => {
  // Sample data for featured games
  const featuredGames = [
    { id: 1, title: 'Neon Slots', provider: 'Provider Name', isNew: true, isHot: false },
    { id: 2, title: 'Cyber Roulette', provider: 'Provider Name', isNew: false, isHot: true },
    { id: 3, title: 'Laser Blackjack', provider: 'Provider Name', isNew: false, isHot: true },
    { id: 4, title: 'Retro Poker', provider: 'Provider Name', isNew: true, isHot: false },
  ]
  
  // Sample data for promotions
  const promotions = [
    { 
      id: 1, 
      title: 'Welcome Bonus', 
      description: 'Get 100% bonus up to $1000 on your first deposit', 
      validUntil: 'No expiry', 
      badge: 'NEW PLAYERS' 
    },
    { 
      id: 2, 
      title: 'Free Spins Friday', 
      description: 'Deposit $50 and get 50 free spins every Friday', 
      validUntil: 'Every Friday', 
      badge: 'WEEKLY' 
    },
  ]
  
  return (
    <div>
      <Hero />
      
      <div className="container mx-auto px-4 py-16">
        {/* Featured Games Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">Featured Games</h2>
            <Link to="/games" className="text-neon-blue hover:text-neon-pink">
              View All Games
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGames.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
        
        {/* Promotions Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">Latest Promotions</h2>
            <Link to="/promotions" className="text-neon-blue hover:text-neon-pink">
              View All Promotions
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {promotions.map(promo => (
              <PromotionCard key={promo.id} promo={promo} />
            ))}
          </div>
        </div>
        
        {/* Jackpot and CTA Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <JackpotCounter />
          
          <div className="bg-casino-dark p-6 rounded-lg border border-neon-purple">
            <h3 className="text-neon-blue text-xl font-semibold mb-2">Ready to Win Big?</h3>
            <p className="text-gray-300 mb-4">
              Join thousands of players already winning. Sign up now and claim your welcome bonus!
            </p>
            <Link to="/register" className="neon-button-pink inline-block">
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
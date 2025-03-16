import { useState } from 'react'
import GameCard from '../components/GameCard'
import CategoryFilter from '../components/CategoryFilter'

const GamesPage = () => {
    // Sample categories
    const categories = [
      { id: 'slots', name: 'Slots' },
      { id: 'table', name: 'Table Games' },
      { id: 'live', name: 'Live Casino' },
      { id: 'jackpot', name: 'Jackpots' },
      { id: 'new', name: 'New Games' }
    ]
    
    // Sample games data
    const allGames = [
      { id: 1, title: 'Neon Slots', provider: 'Provider Name', isNew: true, isHot: false, category: 'slots' },
      { id: 2, title: 'Cyber Roulette', provider: 'Provider Name', isNew: false, isHot: true, category: 'table' },
      { id: 3, title: 'Laser Blackjack', provider: 'Provider Name', isNew: false, isHot: true, category: 'table' },
      { id: 4, title: 'Retro Poker', provider: 'Provider Name', isNew: true, isHot: false, category: 'table' },
      { id: 5, title: 'Mega Jackpot', provider: 'Provider Name', isNew: false, isHot: true, category: 'jackpot' },
      { id: 6, title: 'Neon Reels', provider: 'Provider Name', isNew: true, isHot: false, category: 'slots' },
      { id: 7, title: 'Live Roulette', provider: 'Provider Name', isNew: false, isHot: false, category: 'live' },
      { id: 8, title: 'Live Blackjack', provider: 'Provider Name', isNew: false, isHot: false, category: 'live' },
      { id: 9, title: 'Disco Spins', provider: 'Provider Name', isNew: true, isHot: false, category: 'slots' },
      { id: 10, title: 'Lucky Sevens', provider: 'Provider Name', isNew: false, isHot: true, category: 'slots' },
      { id: 11, title: 'Baccarat Pro', provider: 'Provider Name', isNew: false, isHot: false, category: 'table' },
      { id: 12, title: 'Mega Millions', provider: 'Provider Name', isNew: false, isHot: true, category: 'jackpot' }
    ]
    
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')
    
    const filteredGames = allGames.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-white mb-6">Our Games</h1>
        
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 bg-casino-dark text-white border border-neon-purple rounded-lg focus:outline-none focus:border-neon-blue"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">Sort by:</span>
            <select className="px-4 py-2 bg-casino-dark text-white border border-neon-purple rounded-lg focus:outline-none focus:border-neon-blue">
              <option value="popular">Popular</option>
              <option value="newest">Newest</option>
              <option value="a-z">A-Z</option>
            </select>
          </div>
        </div>
        
        <CategoryFilter categories={categories} onChange={setSelectedCategory} />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        
        {filteredGames.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-400">No games found. Try adjusting your search or filter.</p>
          </div>
        )}
      </div>
    )
  }
  
  export default GamesPage
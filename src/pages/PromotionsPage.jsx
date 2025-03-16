import PromotionCard from '../components/PromotionCard'

const PromotionsPage = () => {
  // Sample promotions data
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
    { 
      id: 3, 
      title: 'Reload Bonus', 
      description: '50% bonus up to $500 on all deposits', 
      validUntil: 'Valid until 31/12/2025', 
      badge: 'LIMITED TIME' 
    },
    { 
      id: 4, 
      title: 'Refer a Friend', 
      description: 'Get $50 bonus for each friend you refer', 
      validUntil: 'No expiry', 
      badge: null 
    },
    { 
      id: 5, 
      title: 'Cashback Tuesdays', 
      description: 'Get 10% cashback on losses every Tuesday', 
      validUntil: 'Every Tuesday', 
      badge: 'WEEKLY' 
    },
    { 
      id: 6, 
      title: 'VIP Program', 
      description: 'Exclusive rewards and bonuses for our VIP players', 
      validUntil: 'No expiry', 
      badge: 'VIP' 
    },
  ]
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-white mb-6">Promotions & Bonuses</h1>
      
      <p className="text-gray-300 mb-8">
        Discover our latest promotions, bonuses, and special offers. 
        New players can enjoy our generous welcome bonus while our regular players 
        can take advantage of our ongoing promotions.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {promotions.map(promo => (
          <PromotionCard key={promo.id} promo={promo} />
        ))}
      </div>
    </div>
  )
}

export default PromotionsPage
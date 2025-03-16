import { useState, useEffect } from 'react'

const JackpotCounter = ({ baseAmount = 1000000, increment = 0.5 }) => {
  const [amount, setAmount] = useState(baseAmount)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAmount((prevAmount) => prevAmount + increment)
    }, 1000)
    
    return () => clearInterval(interval)
  }, [increment])
  
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount)
  
  return (
    <div className="bg-casino-dark p-6 rounded-lg border border-neon-purple">
      <h3 className="text-neon-green text-xl font-semibold mb-2">Mega Jackpot</h3>
      <div className="text-3xl font-bold neon-text-pink">
        {formattedAmount}
      </div>
      <div className="text-xs text-gray-400 mt-1">Increasing every second</div>
    </div>
  )
}

export default JackpotCounter
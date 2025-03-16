import { useState } from 'react'

const CategoryFilter = ({ categories, onChange }) => {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const handleClick = (category) => {
    setActiveCategory(category)
    onChange(category)
  }
  
  return (
    <div className="flex flex-wrap gap-2 my-6">
      <button
        className={`px-4 py-2 rounded-full text-sm transition-all ${
          activeCategory === 'all' 
            ? 'bg-neon-blue text-black' 
            : 'bg-casino-dark text-white hover:bg-gray-800'
        }`}
        onClick={() => handleClick('all')}
      >
        All Games
      </button>
      
      {categories.map((category) => (
        <button
          key={category.id}
          className={`px-4 py-2 rounded-full text-sm transition-all ${
            activeCategory === category.id 
              ? 'bg-neon-blue text-black' 
              : 'bg-casino-dark text-white hover:bg-gray-800'
          }`}
          onClick={() => handleClick(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
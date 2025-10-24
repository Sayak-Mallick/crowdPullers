import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string | 'all'
  onCategoryChange: (category: string | 'all') => void
}

export default function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const [showAll, setShowAll] = useState(false)
  const displayCategories = showAll ? categories : categories.slice(0, 4)

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => onCategoryChange('all')}
          className="text-xs"
        >
          All Categories
        </Button>
        
        {displayCategories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            size="sm"
            onClick={() => onCategoryChange(category)}
            className="text-xs"
          >
            {category}
          </Button>
        ))}
        
        {categories.length > 4 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAll(!showAll)}
            className="text-xs text-muted-foreground"
          >
            {showAll ? 'Show Less' : `+${categories.length - 4} More`}
          </Button>
        )}
      </div>
    </div>
  )
}

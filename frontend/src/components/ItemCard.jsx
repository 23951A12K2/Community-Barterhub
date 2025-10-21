import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemCard({ item }) {
  const img = item.image_url || '/assets/placeholder.png'
  return (
    <div className="card p-4 rounded-lg">
      <Link to={`/item/${item.id}`}>
        <img src={img} alt={item.title} className="w-full h-48 object-cover rounded-md mb-3" />
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-sm text-muted truncate">{item.short_description || item.description}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs">{item.category}</span>
          <span className="text-sm font-medium" style={{color: 'var(--accent)'}}>Trade</span>
        </div>
      </Link>
    </div>
  )
}

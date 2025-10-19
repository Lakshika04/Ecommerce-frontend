import React, { useContext } from 'react'
import './CategorySection.css'
import { ShopContext } from '../../Context/ShopContext'
import Item from '../Items/Item'

// Helper to normalize category strings (e.g. 'kid' <-> 'kids')
const normalize = (s) => (s || '').toString().trim().toLowerCase()

const CategorySection = ({ title, category }) => {
  const { all_product = [] } = useContext(ShopContext) || {}

  const wanted = normalize(category)

  const products = all_product.filter(p => {
    const c = normalize(p.category)
    if (!c) return false
    if (c === wanted) return true
    // handle simple singular/plural mismatch: kid <-> kids
    if (c.endsWith('s') && c.slice(0, -1) === wanted) return true
    if (wanted.endsWith('s') && wanted.slice(0, -1) === c) return true
    return false
  })

  if (!products.length) return null

  return (
    <div className="category-section">
      <h2>{title}</h2>
      <hr />
      <div className="category-items">
        {products.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  )
}

export default CategorySection

import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdowm_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Item'

const ShopCategory = (props) => {

  const { all_product = [] } = useContext(ShopContext) || {};
  const normalize = (s) => (s || '').toString().trim().toLowerCase()
  return (
    <div className='shop_category'>
      <img className='shopcategory_banner' src={props.banner} alt="" />
      <div className="shopcategory_indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory_sort">
          Sort  by <img src={dropdowm_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory_products">
        {all_product.map((item,i)=>{
          const pCat = normalize(item.category)
          const want = normalize(props.category)
          const match = pCat === want || (pCat.endsWith('s') && pCat.slice(0,-1)===want) || (want.endsWith('s') && want.slice(0,-1)===pCat)
          if(match){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          return null
        })}
      </div>
      <div className="shopcategory_loadmore">
        Explore more
      </div>
      </div>
  )
}

export default ShopCategory
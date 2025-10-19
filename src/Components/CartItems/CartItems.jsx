import React,{useContext} from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

 const CartItems= () => {
    const {  getTotalCartAmount ,all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
        <div className="cartitems_format_main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e) => {
            if(cartItems[e.id] > 0)
             {
                 return <div>
            <div className="cartitems_format cartitems_format_main">
                <img src={e.image} alt="" className='carticon_product_icon'/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems_quantity' >{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img className ="cartitems_remove_icon"src={remove_icon} onClick={() => {removeFromCart(e.id)}} alt="" />
            </div>
            <hr />
            </div>
             }

             return null;    
        })}

        <div className='cartitems_down'>
            <div className="cartitems_total">
                <h1> CART TOTAL</h1>
                <div>
                    <div className="cartitems_total_item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems_total_item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems_total_item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="classitems_promocode">
                <p>If you've a promocode, Enter here</p>
                <div className="cartitems_promobox">
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    

        </div>

  
  )
}
export default CartItems;

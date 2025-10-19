import React, {createContext, useState} from "react";
import all_product from "../Components/Assets/all_product";
import Product from "../Pages/Product";

// Provide a safe default so consumers can call .map without crashing when
// the provider isn't present yet (or during tests).
export const ShopContext = createContext({ all_product: [] });


const getDefaultCart = () => {
        let cart = {};
        for(let index=0; index < all_product.length+1; index++){
            cart[index] = 0;
        }
        return cart;
    };

    const ShopContextProvider = (props) => {

     const [cartItems, setCartItems] = useState(getDefaultCart());
   

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
        console.log(cartItems);
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const getTotalCartAmount = ()=>{
        let totalAmount=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((Product)=>Product.id===Number(item))
                totalAmount+= itemInfo.new_price* cartItems[item];
            }
           
        }
         return totalAmount;
    }

    const getTotalCartItems = () =>{
        let TotalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                TotalItem += cartItems[item];
            }
        }
        return TotalItem;
    }

     const contextValue = {getTotalCartItems,getTotalCartAmount ,all_product, cartItems, addToCart, removeFromCart };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;


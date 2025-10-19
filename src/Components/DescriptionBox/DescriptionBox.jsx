import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox_navigator">
            <div className="descriptionbox_nav_box">Description</div>
            <div className='descriptionbox_nav_box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox_description'>
            <p>An e-commerce website is a digital storefront that enables the buying and selling of goods, services, or digital products over the internet. It functions as an online platform where businesses can showcase products, process orders, handle payments, and manage shipping and customer service, allowing customers to make purchases from anywhere with an internet connection.</p>
            <p>
                E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet.Unlike a physical storefront, an e-commerce website can be accessed at any time, from anywhere, as long as there's an internet connection.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox
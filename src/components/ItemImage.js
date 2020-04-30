import React from 'react'
import chicken from './chicken.jpg'
import './ItemImage.css'

const ItemImage = () => {
    return (
        <img 
            className="item-image"
            src={chicken} alt="item" />
 
    )
}

export default ItemImage
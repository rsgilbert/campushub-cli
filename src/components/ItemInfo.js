import React from 'react'
import './ItemInfo.css'
const ItemInfo = props => {
    return (
        <div className="item-info">
            <p className="item-name">{ props.item.name }</p>
            <p className="item-price">{ props.item.price } UGX</p>
        </div>
    )
}

export default ItemInfo
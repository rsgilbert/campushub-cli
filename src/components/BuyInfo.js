import React from 'react'
import './BuyInfo.css'

const BuyInfo = props => {
    return (
        <div className="buy-info">
            <p className="item-name">{ props.item.name }</p>
            <p className="item-price">{ props.item.price } UGX</p>
        </div>
    )
}

export default BuyInfo
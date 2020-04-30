import React from 'react'
import './Item.css'
import ItemImage from './ItemImage'
import './ItemImages.css'

const ItemImages = (props) => {
    return (
        <div className="item-images"> 
            { props.images.map(image => 
              <ItemImage image={ props.images[0] } />
            )}
        </div>
    )
}

export default ItemImages
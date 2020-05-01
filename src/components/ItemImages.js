import React from 'react'
import './Item.css'
import ItemImage from './ItemImage'
import './ItemImages.css'

const ItemImages = (props) => {
    return (
        <div className="item-images"> 
            { props.images.map((image, idx) => 
              <ItemImage image={ props.images[0] } key={idx} />
            )}
        </div>
    )
}

export default ItemImages
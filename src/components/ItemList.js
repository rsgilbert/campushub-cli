import React from 'react'
import Item from './Item'
import './ItemList.css'



const ItemList = () => {
    return (
        <div className="item-list">
            { items.map( item => 
                <Item item= { item } key={ item.id }/>
            ) }
        </div>
    )
}

const items = [
    { 
        id: "a",
        name: "Belt",
        price: 2000,
        pictures: ['', '', '']
    },  
    { 
        id: "b",
        name: "Earphone",
        price: 5000,
        pictures: ['', '', '']
    },
    { 
        id: "c",
        name: "Eye glasses",
        price: 3000,
        pictures: ['', '', '']
    }
]
export default ItemList
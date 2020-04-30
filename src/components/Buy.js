import React from 'react'
import './Item.css'
import Header from "./Header";
import ProductImages from './ItemImages'
import BuyInfo from './BuyInfo'
import BuyTitle from './BuyTitle'


const Buy = () => {
    return (
        <>
            <Header />
            <ProductImages images={item.pictures} />
            <BuyInfo item={item}/>
            <BuyTitle />
        </>
    )
}


const item = 
    { 
        id: "a",
        name: "Belt",
        price: 2000,
        pictures: ['', '', '', '', '', '']
    }

export default Buy
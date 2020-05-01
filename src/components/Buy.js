import React, { useEffect, useState } from 'react'
import './Item.css'
import ProductImages from './ItemImages'
import BuyInfo from './BuyInfo'
import BuyForm from './BuyForm';


const Buy = props => {
    // console.log(props.match.params.id)
    // console.log(props.location.state)
    const [item, setItem] = useState()

    useEffect(() => {
        setItem(props.location.state)
    }, [props.location.state])
    
    return (
        <>
            { item && <>
            <ProductImages images={item.pictures} />
            <BuyInfo item={item}/>
            <BuyForm itemId={item._id}/>
            </>
}
        </>
    )
}


// const item = 
//     { 
//         id: "a",
//         name: "Belt",
//         price: 2000,
//         pictures: ['', '', '', '', '', '']
//     }

export default Buy
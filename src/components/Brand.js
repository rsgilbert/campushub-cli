import React from 'react'
import './Brand.css'
import logo from './logo.svg';
import AppTitle from "./AppTitle";



const Brand = (props) => {
    return (
        <div className="brand">
            <img src={logo} className="App-logo" alt="logo" /> 
            <AppTitle />
        </div>
    )
}

export default Brand
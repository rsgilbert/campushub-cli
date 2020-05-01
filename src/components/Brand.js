import React from 'react'
import './Brand.css'
import logo from './logo.svg';
import AppTitle from "./AppTitle";
import { Link } from 'react-router-dom';



const Brand = (props) => {
    return (
        <Link
            to="/"
            className="brand brand-link">
            <img src={logo} className="App-logo" alt="logo" /> 
            <AppTitle />
        </Link>
    )
}

export default Brand
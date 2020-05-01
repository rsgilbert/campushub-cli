import React from 'react'
import './BuyForm.css'
import { useState } from 'react'


const BuyForm = () => {
    const [hall, setHall] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        console.log(hall + " " + phoneNumber)
    } 

    const handlePhoneNumberChange = event => {
        setPhoneNumber(event.target.value)
    }

    const handleHallChange = event => {
        setHall(event.target.value)
    }

    return (
        <div>
            <form
                className="buy-form"
                method="post"
                onSubmit={handleSubmit}
                >
                <label
                    className="buy-form-label">
                    Hall or Hostel
                    <input 
                        className="buy-form-input"
                        type="text"
                        placeholder="hall / hostel"
                        value={hall}
                        onChange={handleHallChange}
                        />    
                </label>
                
                <label className="buy-form-label">
                    Phone Number
                    <input
                        className="buy-form-input" 
                        type="text"
                        placeholder="phone number"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        />     
                </label>               

                <button className="buy-form-button">Buy</button>
            </form>
        </div>
    )


}



export default BuyForm
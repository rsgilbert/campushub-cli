import React from 'react'
import './BuyForm.css'
import { useState } from 'react'

const serverUrlLaptop = "http://localhost:5000";
const serverUrlPhone = "http://10.0.2.2:5000"
const serverUrl = serverUrlLaptop
const ordersUrl = serverUrl + "/orders";

const BuyForm = ({ itemId }) => {
    const [hall, setHall] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [error, setError] = useState(null);
    const [isPosted, setIsPosted] = useState(false);


    // post order 
    const handleSubmit = e => {
        e.preventDefault()
        const payload = { hall, phoneNumber, itemId }
        fetch(ordersUrl, {
            method: 'POST',
            // the headers are very important, do not miss them
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(
            (result) => {
              setIsPosted(true);
              alert("Complete!")
              console.log(result)
            },
            // Note: it's important to handle errors here
            // instead of catch() block so that we do not swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsPosted(true)
              setError(error);
              alert("Not sent")
            }
          );
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
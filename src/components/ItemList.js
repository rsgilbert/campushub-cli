import React, { useState, useEffect } from "react";
import Item from "./Item";
import "./ItemList.css";

let serverUrlLaptop = "http://localhost:5000";
let serverUrlPhone = "http://10.0.2.2:5000"
let serverUrl = serverUrlLaptop
const itemsUrl = serverUrl + "/items";

const ItemList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // empty deps array [] means this useEffect will run once
  useEffect(() => {
    fetch(itemsUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of catch() block so that we do not swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>; 
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="item-list">
        {items.map((item) => (
            <Item item={item}  key={item._id}/>
        ))}
      </div>
    );
  }
};

// const items = [
//     {
//         id: "a",
//         name: "Belt",
//         price: 2000,
//         pictures: ['', '', '']
//     },
//     {
//         id: "b",
//         name: "Earphone",
//         price: 5000,
//         pictures: ['', '', '']
//     },
//     {
//         id: "c",
//         name: "Eye glasses",
//         price: 3000,
//         pictures: ['', '', '']
//     }
// ]
export default ItemList;

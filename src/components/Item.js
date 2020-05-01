import React from "react";
import "./Item.css";
import ItemImage from "./ItemImage";
import ItemInfo from "./ItemInfo";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <Link 
        to={{
            pathname: `/buy/${props.item._id}`,
            state: props.item 
        }}
        className="item item-link"
        >
        <ItemImage item={props.item} />
        <ItemInfo item={props.item} />
    </Link>
   
  );
};

export default Item;

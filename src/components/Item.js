import React from "react";
import "./Item.css";
import ItemImage from "./ItemImage";
import ItemInfo from "./ItemInfo";

const Item = (props) => {
  return (
    <div className="item">
      <ItemImage item={props.item} />
      <ItemInfo item={props.item} />
    </div>
  );
};

export default Item;

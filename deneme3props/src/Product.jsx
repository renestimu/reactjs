import React from "react";

function Product(props) {
  return (
    <div>
      <div>Ürün Bilgileri</div>
      <div>
        <div>isim: {props.pName}</div>
        <div>isim:  {props.price}</div>
      </div>
    </div>
  );
}

export default Product;

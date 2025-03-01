import React, { Component } from "react";

class ProductItems extends Component{
    render(){
        const{product}=this.props;
        return(
            <li>
                <h2>{product.name}</h2>
                <p>Price: ${product.price}</p>
                <button onClick={()=>this.props.addToCart(product)}>AddToCart</button>
            </li>
        )
    }
}
export default ProductItems;
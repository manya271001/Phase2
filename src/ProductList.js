import React, { Component } from 'react';
import ProductItems from './ProductItems';
class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        // Add more products as needed
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>Product List</h1>
        <ul>
          {this.state.products.map(product => (
            <ProductItems key={product.id} product={product} />
          ))}
        </ul>
      </div>
    );
  }
}
export default ProductList;
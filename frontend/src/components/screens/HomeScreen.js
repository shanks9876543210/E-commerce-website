import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../Product';
import CartList from '../CartList';
import axios from 'axios';

const HomeScreen =(props)=>{
 
  // const [showCart, setShowCart] = useState(false)
 
  // const handleShowCart=(value)=>{
  //   setShowCart(value)
  // }
 


  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const res = await axios.get('http://localhost:8000/api/products/');
      console.log(res);
  
      // Check if 'data' property exists
      if (res.data && res.data.products) {
        const productsData = res.data.products;
        setProducts(productsData);
      } else {
        console.error('Error fetching products: Data or products property is undefined.');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }


  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className='text-center'>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            
            <Product product={product}  /> 
            

          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;

import './App.css';
import React, { useState, useEffect } from 'react';
import {Container} from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import HomeScreen from './components/screens/HomeScreen';
import ProductScreen from './components/screens/ProductScreen';

import CartPage from './components/CartPage';
function App() {
  const [cart, setCart] = useState([])
  console.log(cart)
  const addToCart=(data)=>{
    console.log(data)
    setCart([...cart,{...data,quantity:2}])
  }


  return (
    <BrowserRouter>
    
    
       <Header size={0} />
      <main className='py-3'>
        <Container>
          <Routes>
          <Route path='/' exact element={<HomeScreen addToCart={addToCart} />}/>
          <Route path='/product/:id' exact element={<ProductScreen  />}/>
          <Route path='/cart' exact element={<CartPage  />}/>
         
         </Routes>
        </Container>
        
      </main>
       <Footer  />
     



 
    
    </BrowserRouter>
    
    
  );
}

export default App;
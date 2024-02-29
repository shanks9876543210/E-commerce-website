import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './cartSceen.css'
const CartScreen = ({product}) => {
    //const [price, setPrice] = useState(0)
   //const [cart, setCart] = useState([])
    


  return (
    <div className='container'>
      <Link to='/'>Go back</Link>
       <h1>Shopping Cart</h1>
       <p>you have <span>4</span> items in cart.</p>
       <div className='product-img'>
        <img src='https://images.unsplash.com/photo-1606041011872-596597976b25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8fDA%3D' />
    </div>
    <div>
      <h1>Iphone</h1>
    </div>
    <div className='quantity'>
      <i className='fas fa-minus minus'></i>
      <input type='text' placeholder='2' style={{width:'40px'}}></input>
      <i className='fas fa-plus add'></i>
      <button>delete</button>

    </div>
    <div>
      <span>Total: Rs 40000</span>
      <button>checkout</button>
    </div>

    </div>
  )
}

export default CartScreen
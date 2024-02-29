import React from 'react'

const CartList = ({cart}) => {
  return (
    <div>
       { cart.map(cartItem =>{
        return (
            <div key={cartItem._id}>
                <img src={cartItem.image} width={40}></img>
                <span>{cartItem.name}</span>
                <button>+</button>
                <span>{cartItem.quantity}</span>
                <button>-</button>
                <span>{cartItem.price}</span>
                 </div>
        )

        })
}
    </div>
  )
}

export default CartList
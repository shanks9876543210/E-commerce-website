import React from 'react'
import KhaltiCheckout from "khalti-checkout-web";
import config from './khaltiConfig';
const Khalti = ({totalPrice}) => {
    let checkout = new KhaltiCheckout(config);
    
  return (
    <div>
        
        <button   type="button" className="btn btn-primary btn-lg btn-block" onClick={()=> checkout.show({amount: totalPrice*100})}>Check Out</button>
    </div>
  )
}

export default Khalti
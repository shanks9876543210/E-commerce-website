import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity,deleteAllItems } from './redux/slices/cartSlice';
import Khalti from './payment/Khalti';

const CartPage = () => {
  const items = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (item) => {
    dispatch(increaseQuantity(item));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity(item));
  };

  const handleRemoveCart = (cartId) => {
    dispatch(removeItem(cartId));
  };
  const handleDeleteAllItems = () => {
    dispatch(deleteAllItems());
    
  };
  
  const totalPrice = items.reduce((total, data) => total + (Number(data.price) * data.quantity), 0);


  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {items.length} items</h5>
                </div>
                <div className="card-body">
                  {items.map(data => (
                    <div key={data._id} className="row">
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                          <img src={data.image} className="w-100" alt={data.name} />
                          <a href="#!">
                            <div className="mask" style={{ backgroundColor: " rgba(251, 251, 251, 0.2);" }}></div>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p><strong>{data.name}</strong></p>
                        <button type="button" onClick={() => handleRemoveCart(data._id)} className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip" title="Remove item">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="d-flex mb-4" style={{ maxWidth: "300px;" }}>
                          <button className="btn btn-primary px-3 me-2" onClick={() => handleDecreaseQuantity(data)}>
                            <i className="fas fa-minus"></i>
                          </button>
                          <div className="form-outline">
                            <input
                              id={`quantity_${data._id}`}
                              min="0"
                              name="quantity"
                              value={data.quantity}
                              type="number"
                              className="form-control"
                              readOnly
                            />
                            <label className="form-label" htmlFor={`quantity_${data._id}`}>Quantity</label>
                          </div>
                          <button className="btn btn-primary px-3 ms-2" onClick={() => handleIncreaseQuantity(data)}>
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <p className="text-start text-md-center">
                          <strong>Rs {data.price}</strong>
                        </p>
                      </div>
                    </div>
                  ))}
                  { items.length>0?(
                  <button onClick={handleDeleteAllItems} className='btn btn-danger my-3'>Delete all items</button>):("There is no items.Start Shopping.")}
                  <hr className="my-4" />
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <p><strong>Expected shipping delivery</strong></p>
                  <p className="mb-0">12.10.2020 - 14.10.2020</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Total Quantity
                      <span>0</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total Price:</strong>
                      </div>
                      <span><strong>Rs. {totalPrice}</strong></span>
                    </li>
                  </ul>
                 
                    <Khalti totalPrice={totalPrice} />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CartPage;

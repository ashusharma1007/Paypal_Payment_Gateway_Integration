import React, { useState } from "react";
import "../App.css";
import PayPal from "./PayPal";


function Checkout() {
  const [checkout, setCheckOut] = useState(false);
  const [item, setItem] = useState('');
  const ItemonChange = (event) => {
    setItem(event.target.value);
  };
  const [amount, setAmount] = useState('');
  const AmountonChange = (event) => {
    setAmount(event.target.value);
  };
  const currency = "USD"

  
  return (
    <div className="App">
      {checkout ? (
        <PayPal currency={currency} value={amount} item={item}/>
      ) : (
<>
<div class="card" style={{textAlign: 'center'}}>
  
  <div class="container">
    <h4><b> Please Enter the required Details</b></h4>
    <p>  <div style={{display: 'flex'}}>

<div style={{marginRight: '1rem'}}>Item Name: </div>

<input required value={item} onChange={ItemonChange} />
</div> </p>
    <p>   <div style={{display: 'flex'}}>
        <div style={{marginRight: '2.4rem'}}>Amount:</div>
    
        <input required value={amount} onChange={AmountonChange} />
        </div></p>
    <p>  <div style={{display: 'flex'}}>
        <div style={{marginRight: '2rem'}}>Currency:</div>
      
        <input value="USD" />
        </div> </p>
    <p>   <button
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Checkout
        </button></p>
   
  </div>
</div>

      
      
      
  </>
      )}
    </div>
  );
}

export default Checkout;

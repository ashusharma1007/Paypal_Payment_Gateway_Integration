import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Cards.css'
const CardsDetails = (props) => {
    return (
        <div>
<div class="card">
  
  <div class="container">
    <h4><b>Transaction ID: {props.Payment_ID}</b></h4>
    <p>Value Of Item: {props.Amount} {props.Currency}</p>
    <p>Name Of Item: {props.Item}</p>

  </div>
</div>
</div>
)
};
export default CardsDetails;
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
const Result = ({history}) => {
    const [response, setResponse] = useState();
    const Payment_ID = localStorage.getItem('id')
    const Item = localStorage.getItem('item')
    const currency = localStorage.getItem('currency')
    const [Data, setData] = useState([]);
  
    useEffect(() => {
    const fetchData = async () => {
  
    
    
  
        try {
    
     
          const { data } = await axios.get('http://localhost:5000/api/transactions/transactionDetails');
          // console.log(localStorage.getItem("email"))
          setData(data)
        
        } catch (error) {
          console.log(error.response.data.error);
          
          // setError("");
        }
      };
      fetchData();
    },[history]);
    const value = localStorage.getItem('value')
    useEffect(() => {
       
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        axios.post('http://localhost:5000/api/transactions/transactionProcesss', 
        { 
            Payment_ID,
            Item,
            currency,
            value 
      },config)
            .then(response => setResponse(response.data));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
 
    return (
      
        <div>
          <div class="card" style={{textAlign: 'center'}}>
  
  <div class="container">
    <h4><b> Congrats on successfull transactions!!!!!</b></h4>
    <p>   Payment ID: {localStorage.getItem('id')} </p>
    <p> Value of item: {localStorage.getItem('value')} {localStorage.getItem('currency')}</p>
    <p> Name: {localStorage.getItem('item')} </p>
    <p>     Satus: Completed Payment</p>
   
  </div>
</div>
           
          
       

<div>
  <Link to="/TransactionsDetails">
<button style={{margin: '2rem 0', marginLeft: '43%'}} >
          View All Transactions Details
        </button>
        </Link>
</div>
        </div>
        
    )
}
export default Result;
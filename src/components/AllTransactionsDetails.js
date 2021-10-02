import React, { useState, useEffect } from "react";
import axios from 'axios';
import CardsDetails from "./CardsDetails";
const TransactionsDetails = ({history}) => {
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
    return (
<div>
{ Data.alltransactions?.map((trans, i) => (
     <div key={i}>
<CardsDetails
Payment_ID ={trans.Payment_ID}
Item = {trans.Item}
Currency= {trans.currency}
Amount = {trans.value}

/>
</div>
))}
</div>
    )
}
export default TransactionsDetails ;
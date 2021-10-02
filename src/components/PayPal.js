import React, { useRef, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Checkout from "./Checkout";
import { useHistory } from "react-router-dom";
import Result from "./Result";

export default function Paypal(props) {
  const paypal = useRef();
  let history = useHistory();
  console.log(props)
  const [orderDetails, setOrderDetails] = useState({});
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: `${props.currency}`,
                  value: `${props.value}`,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          localStorage.setItem('id', order.id)
          localStorage.setItem('item', props.item)
          localStorage.setItem('value', props.value)
          localStorage.setItem('currency', props.currency)
          console.log(localStorage.getItem('id'))
          history.push('/Result')
       
        },
        onError: (err) => {
          history.push('/error')
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
      {/* {<Result   amount={props.value} currency={props.currency} item={props.item} />} */}
    </div>
  );
}

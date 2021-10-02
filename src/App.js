import React, { Fragment, Suspense } from "react";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Result from "./components/Result";
import TransactionsDetails from "./components/AllTransactionsDetails";
import ErrorPage from "./components/ErrorPage";

export default function App() {
  return (
 
        <Router>
       

          <Switch>
            <Route path="/" exact component={Checkout} />
            <Route path="/Result" component={Result} />
            <Route path="/TransactionsDetails" component={TransactionsDetails} />
            {/* {/* <Route path="/checkout" component={Checkout} /> */}
            <Route path="/error" component={ErrorPage} /> 
          </Switch>


        </Router>
 
  );
}

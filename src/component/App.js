import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from './Header';
import HomePage from './HomePage';
import CustomersList from './CustomersList';
import AddCustomers from "./AddCustomers";

function App() {
    return(
        <div>
        <Header />
        <Switch>
            <Route path="/api" exact component={HomePage} />    
            <Route path="/api/customers" exact component={CustomersList} />
            <Route path="/api/addCustomers/:id" component={AddCustomers} />
            <Route path="/api/addCustomers" component={AddCustomers} />
        </Switch>
        </div>
    );
}

export default App;
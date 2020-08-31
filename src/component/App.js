import React from "react";
import {Switch, Route} from "react-router-dom";
import Header from './Header';
import HomePage from './HomePage';
import CustomersList from './CustomersList';
import AddCustomers from "./AddCustomers";
import CustomerInteractions from './CustomerInteractions';
import AddCustomerInteractions from "./AddCustomerInteractions";

function App() {
    return(
        <div>
        <Header />
        <Switch>
            <Route path="/api" exact component={HomePage} />    
            <Route path="/api/customers" exact component={CustomersList} />
            <Route path="/api/addCustomers/:id" component={AddCustomers} />
            <Route path="/api/addCustomers" component={AddCustomers} />
            <Route path="/api/customers/:id/interactions/new" component={AddCustomerInteractions} />
            <Route path="/api/customers/:id/interactions" component={CustomerInteractions} />
        </Switch>
        </div>
    );
}

export default App;
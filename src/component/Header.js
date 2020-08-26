import React from 'react';
import {NavLink} from 'react-router-dom';

function Header(props) {
    const navActiveColor = {color : "blue"};
    return(
        <nav>
            <NavLink active={navActiveColor} exact to="/api">
                Home Page
            </NavLink> {"| "}
            <NavLink active={navActiveColor} to="/api/customers">
                List of Customers
            </NavLink> {"| "}
            <NavLink active={navActiveColor} to="/api/addCustomers">
                Add Customers
            </NavLink>
        </nav>
    );
}

export default Header;
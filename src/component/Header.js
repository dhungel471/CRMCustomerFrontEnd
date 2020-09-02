import React from 'react';
import {NavLink} from 'react-router-dom';

function Header(props) {
    return(
        <nav className="navbar navbar-inverse navbar-static-top">
            <ul className="nav nav-pills">
                <li className="mr-1">
                    <NavLink className="nav-link" data-toggle="pill" exact to="/api">
                            CRM
                    </NavLink>
                </li>
                <li className="mr-1">
                   <NavLink className="nav-link" to="/api/customers">List of Customers</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link"  to="/api/addCustomers">Add Customers</NavLink>
                </li>
            </ul>
        </nav>

    );
}

export default Header;
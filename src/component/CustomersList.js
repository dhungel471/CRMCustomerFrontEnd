import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useHistory} from "react-router-dom";
import {fetchCustomer, deleteCustomer} from '../actions/customerAction';
import PageHeader from "./PageHeader";

function mapStateToProps(state) {
    return {
        error: state.customers.error,
        loading: state.customers.loading,
        customers: state.customers.customerList
    }
}

const mapDispatchToProps = {
    fetchCustomer,
    deleteCustomer
}

function CustomersList(props) {
    const history = useHistory();

    useEffect(() => {
        props.fetchCustomer();
    }, [])


    function handleEdit(id, customer) {
        history.push("/api/addCustomers/" + id);
    }

    function handleDelete(id) {
        props.deleteCustomer(id);

    }

    function fetchInteractions(id) {
        history.push(`/api/customers/${id}/interactions`);
    }

    const noBorder = {"border-bottom": "none"}
    return (
        <>
            <PageHeader title="Customers" />
            <div className="table-responsive-md">
            <table className="table">
                <thead className="thead-light">
                <tr className="d-flex">
                    <th className="col-3">Edit/Delete</th>
                    <th className="col-2">First Name</th>
                    <th className="col-2">Last Name</th>
                    <th className="col-2">Phone</th>
                    <th className="col-3">Address</th>
                </tr>
                </thead>
                <tbody>
                {props.customers.length > 0 && props.customers.map((customer) => {
                    return (
                        <tr className="d-flex" key={customer.id}>
                            <td className="col-3">
                                <button className="btn btn-success mr-2"
                                        onClick={() => handleEdit(customer.id, customer)}>Edit
                                </button>
                                <button className="btn btn-danger mr-2" onClick={() => handleDelete(customer.id)}>Delete
                                </button>
                                <button className="btn btn-info"
                                        onClick={() => fetchInteractions(customer.id)}>Details
                                </button>
                            </td>
                            <td className="col-2">{customer.firstName}</td>
                            <td className="col-2">{customer.lastName}</td>
                            <td className="col-2">{customer.phoneNumber}</td>
                            <td className="col-3">{customer.address}</td>
                        </tr>
                    );
                })}
                </tbody>

            </table>
            </div>
        </>
    );
}

//export default CustomersList;
export default connect(mapStateToProps, mapDispatchToProps)(CustomersList);
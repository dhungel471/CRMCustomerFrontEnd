import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { fetchCustomerInteractions, deleteCustomerInteraction } from '../actions/customerInteractionAction';
import {useHistory} from "react-router-dom";
import PageHeader from "./PageHeader";

const CustomerInteractions = (props) => {

    const state = useSelector((state) => state);
    const history = useHistory();

    const { customerInteractionsList } = state.customerInteractions;
    const dispatch = useDispatch();
    const customerId = props.match.params.id;


    useEffect(() => {
        dispatch(fetchCustomerInteractions(customerId));
        return () => {
        };
    }, []);

    const addNew = () => {
        history.push(`/api/customers/${customerId}/addInteractions`);
    }

    function handleEdit(customerId, customerInteractionId) {
        history.push(`/api/customers/${customerId}/interactions/${customerInteractionId}`);
    }

    function handleDelete(customerInteractionId) {
        dispatch(deleteCustomerInteraction(customerInteractionId));
    }

    return (
        <>
            <PageHeader title="Customer Interactions" />
            <button className="btn btn-success mb-3 ml-3" onClick={addNew}>New Interaction</button>
            <div className="table-responsive-md">
            <table className="table">
                <thead className="thead-light">
                <tr className="d-flex">
                    <th className="col-3">Edit/Delete</th>
                    <th className="col-2">Date</th>
                    <th className="col-2">Status</th>
                    <th className="col-3">Description</th>
                    <th className="col-2">Channel</th>
                </tr>
                </thead>
                <tbody>
                {customerInteractionsList.length > 0 && customerInteractionsList.map((customerInteraction) => {
                    return (
                        <tr className="d-flex" key={customerInteraction.id}>
                            <td className="col-3">
                                <button className="btn btn-info mr-2"
                                        onClick={() => handleEdit(customerId, customerInteraction.id)}>Edit
                                </button>
                                <button className="btn btn-danger"
                                        onClick={() => handleDelete(customerInteraction.id)}>Delete
                                </button>
                            </td>
                            <td className="col-2">{customerInteraction.createdDate}</td>
                            <td className="col-2">{customerInteraction.status}</td>
                            <td className="col-3">{customerInteraction.description}</td>
                            <td className="col-2">{customerInteraction.channel}</td>

                        </tr>
                    );
                })}
                </tbody>

            </table>
            </div>
        </>
    );
}

export default CustomerInteractions;
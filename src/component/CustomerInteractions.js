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
        <div>
            <PageHeader title="Customer Interactions" />
            <button className="btn btn-info" onClick={addNew}>New</button>
            <table className="table">
                <thead>
                <tr>
                    <th>Edit/Delete</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Description</th>
                    <th>Channel</th>
                </tr>
                </thead>
                <tbody>
                {customerInteractionsList.length > 0 && customerInteractionsList.map((customerInteraction) => {
                    return (
                        <tr key={customerInteraction.id}>
                            <td>
                                <button className="btn btn-info"
                                        onClick={() => handleEdit(customerId, customerInteraction.id)}>Edit
                                </button>
                                <button className="btn btn-danger"
                                        onClick={() => handleDelete(customerInteraction.id)}>Delete
                                </button>
                            </td>
                            <td>{customerInteraction.createdDate}</td>
                            <td>{customerInteraction.status}</td>
                            <td>{customerInteraction.description}</td>
                            <td>{customerInteraction.channel}</td>

                        </tr>
                    );
                })}
                </tbody>

            </table>
        </div>
    );
}

export default CustomerInteractions;
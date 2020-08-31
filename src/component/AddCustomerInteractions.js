import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addCustomerInteraction } from '../actions/customerInteractionAction';
import { useHistory } from "react-router-dom";

const AddCustomerInteractions = (props) => {

    const history = useHistory();

    const dispatch = useDispatch();
    const slug = props.match.params.id;

    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [channel, setChannel] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const interaction = {
            customerId: slug ? slug : '',
            date,
            status,
            description,
            channel
        }
        dispatch(addCustomerInteraction(interaction));
    }

    function handleCancel(event) {
        event.preventDefault();
        history.push("/api/customers");
    }

    return (
        <div className="container">

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input className="form-control" id="date" aria-describedby="date" placeholder="Enter Date"
                           value={date} onChange={e => setDate(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea className="form-control" id="description" aria-describedby="description"
                              placeholder="Enter Description"
                              value={description} onChange={e => setDescription(e.target.value)}>
                    </textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status:</label>
                    <input className="form-control" id="status" aria-describedby="status" placeholder="Enter Status"
                           value={status} onChange={e => setStatus(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="channel">Channel:</label>
                    <input className="form-control" id="address" aria-describedby="channel" placeholder="Enter Channel"
                           value={channel} onChange={e => setChannel(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
                <button className="btn btn-primary" style={{"marginLeft": "10px"}} onClick={handleCancel}>Cancel
                </button>
            </form>
        </div>
    );


}

export default AddCustomerInteractions;
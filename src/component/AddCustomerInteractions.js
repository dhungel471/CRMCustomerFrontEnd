import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {addCustomerInteraction, updateCustomerInteraction} from '../actions/customerInteractionAction';
import {useHistory} from "react-router-dom";
import {formatDate} from './utils';

const AddCustomerInteractions = (props) => {

    const history = useHistory();

    const dispatch = useDispatch();
    const customerId = props.match.params.id;
    const customerInteractionId = props.match.params.interactionId;

    const state = useSelector((state) => state);
    const interactionList = state.customerInteractions.customerInteractionsList;
    const interaction = customerId && customerInteractionId && interactionList
        && interactionList.find(interaction => interaction.id === customerInteractionId && interaction.customerId === customerId);

    const [date, setDate] = useState(interaction ? interaction.createdDate : formatDate(new Date()));
    const [description, setDescription] = useState(interaction ? interaction.description : '');
    const [channel, setChannel] = useState(interaction ? interaction.channel : 'phone');
    const [status, setStatus] = useState(interaction ? interaction.status : 'new');

    const handleSubmit = (event) => {
        event.preventDefault();
        const interaction = {
            id: customerInteractionId ? customerInteractionId : '',
            customerId: customerId,
            createdDate: date,
            status,
            description,
            channel
        }
        if (customerInteractionId) {
            dispatch(updateCustomerInteraction(customerInteractionId, interaction));
        } else {
            dispatch(addCustomerInteraction(interaction));
        }

        history.push(`/api/customers/${customerId}/interactions`);
    }

    const onStatusChange = (event) => {
        setStatus(event.target.value);
    }

    const handleCancel = (event) => {
        event.preventDefault();
        history.push(`/api/customers/${customerId}/interactions`);
    }

    return (
        <div className="container">

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input className="form-control" type="date" id="date" name="date" value={date}
                           onChange={e => setDate(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea className="form-control" id="description" aria-describedby="description"
                              placeholder="Enter Description"
                              value={description} onChange={e => setDescription(e.target.value)}>
                    </textarea>
                </div>
                <fieldset className="form-group">
                    <legend className="col-form-label">Status:</legend>
                    <div className="row">
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="status"
                                    id="new"
                                    value="new"
                                    checked={status === "new"}
                                    onChange={onStatusChange}/>
                                <label className="form-check-label" htmlFor="new">
                                    New
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="status"
                                    id="pending"
                                    value="pending"
                                    checked={status === "pending"}
                                    onChange={onStatusChange}/>
                                <label className="form-check-label" htmlFor="pending">
                                    Pending
                                </label>
                            </div>
                            <div className="form-check disabled">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="status"
                                    id="complete"
                                    value="complete"
                                    checked={status === "complete"}
                                    onChange={onStatusChange}/>
                                <label className="form-check-label" htmlFor="complete">
                                    Complete
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div className="form-group">
                    <label htmlFor="channel">Channel:</label>
                    <select className="form-control" id="status" aria-describedby="status"
                            value={channel} onChange={e => setChannel(e.target.value)}>
                        <option value="phone">Phone</option>
                        <option value="email">Email</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
                <button className="btn btn-primary" style={{"marginLeft": "10px"}} onClick={handleCancel}>Cancel
                </button>
            </form>
        </div>
    );


}

export default AddCustomerInteractions;
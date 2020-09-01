import axios from "axios";

export const FETCH_CUSTOMER_INTERACTION_BEGIN = 'FETCH_CUSTOMER_INTERACTION_BEGIN';
export const FETCH_CUSTOMER_INTERACTION_SUCCESS = 'FETCH_CUSTOMER_INTERACTION_SUCCESS';
export const FETCH_CUSTOMER_INTERACTION_FAILURE = 'FETCH_CUSTOMER_INTERACTION_FAILURE';

export const ADD_CUSTOMER_INTERACTION_BEGIN = 'ADD_CUSTOMER_INTERACTION_BEGIN';
export const ADD_CUSTOMER_INTERACTION_SUCCESS = 'ADD_CUSTOMER_INTERACTION_SUCCESS';
export const ADD_CUSTOMER_INTERACTION_FAILURE = 'ADD_CUSTOMER_INTERACTION_FAILURE';

export const UPDATE_CUSTOMER_INTERACTION_BEGIN = 'UPDATE_CUSTOMER_INTERACTION_BEGIN';
export const UPDATE_CUSTOMER_INTERACTION_SUCCESS = 'UPDATE_CUSTOMER_INTERACTION_SUCCESS';
export const UPDATE_CUSTOMER_INTERACTION_FAILURE = 'UPDATE_CUSTOMER_INTERACTION_FAILURE';


export const DELETE_CUSTOMER_INTERACTION_BEGIN = 'DELETE_CUSTOMER_INTERACTION_BEGIN';
export const DELETE_CUSTOMER_INTERACTION_SUCCESS = 'DELETE_CUSTOMER_INTERACTION_SUCCESS';
export const DELETE_CUSTOMER_INTERACTION_FAILURE = 'DELETE_CUSTOMER_INTERACTION_FAILURE';

export const fetchCustomerInteractionBegin = () => ({
    type: FETCH_CUSTOMER_INTERACTION_BEGIN
});

export const fetchCustomerInteractionSuccess = customerInteractions => ({
    type: FETCH_CUSTOMER_INTERACTION_SUCCESS,
    payload: { customerInteractions }
});

export const fetchCustomerInteractionError = error => ({
    type: FETCH_CUSTOMER_INTERACTION_FAILURE,
    payload: { error }
});


export const addCustomerInteractionBegin = () => ({
    type: ADD_CUSTOMER_INTERACTION_BEGIN
});

export const addCustomerInteractionSuccess = () => ({
    type: ADD_CUSTOMER_INTERACTION_SUCCESS,
    payload: { message: "success" }
});

export const addCustomerInteractionError = error => ({
    type: ADD_CUSTOMER_INTERACTION_FAILURE,
    payload: { error }
});

export const updateCustomerInteractionBegin = () => ({
    type: UPDATE_CUSTOMER_INTERACTION_BEGIN
});

export const updateCustomerInteractionSuccess = customerInteraction => ({
    type: UPDATE_CUSTOMER_INTERACTION_SUCCESS,
    payload: { customerInteraction }
});

export const updateCustomerInteractionError = error => ({
    type: UPDATE_CUSTOMER_INTERACTION_FAILURE,
    payload: { error }
});


export const deleteCustomerInteractionBegin = () => ({
    type: DELETE_CUSTOMER_INTERACTION_BEGIN
});

export const deleteCustomerInteractionSuccess = id => ({
    type: DELETE_CUSTOMER_INTERACTION_SUCCESS,
    payload: { id }
});

export const deleteCustomerInteractionError = error => ({
    type: DELETE_CUSTOMER_INTERACTION_FAILURE,
    payload: { error }
});

export function fetchCustomerInteractions(id) {
    return dispatch => {
        dispatch(fetchCustomerInteractionBegin());
        axios
        .get(`http://localhost:8080/api/customers/${id}/interactions`)
        .then(response => {
            dispatch(fetchCustomerInteractionSuccess(response.data))
        })
        .catch(error => dispatch(fetchCustomerInteractionError(error)));
    }
}

export function addCustomerInteraction(customerInteraction) {
    return dispatch => {
        dispatch(addCustomerInteractionBegin());
        axios
        .post("http://localhost:8080/api/customers/interactions", customerInteraction)
        .then(response => {
            dispatch(addCustomerInteractionSuccess(response.data));
        })
        .catch(error => dispatch(addCustomerInteractionError(error)));
    }
}

export function updateCustomerInteraction(id, customerInteraction) {
    return dispatch => {
        dispatch(updateCustomerInteractionBegin());
        axios
            .put("http://localhost:8080/api/customers/interactions/"+ id, customerInteraction)
            .then(response => {
                dispatch(updateCustomerInteractionSuccess(response.data));
            })
            .catch(error => dispatch(updateCustomerInteractionError(error)));
    }
}

export function deleteCustomerInteraction(id) {
    return dispatch => {
        dispatch(deleteCustomerInteractionBegin());
        axios
            .delete("http://localhost:8080/api/customers/interactions/"+ id)
            .then(() => {
                dispatch(deleteCustomerInteractionSuccess(id))
            })
            .catch(error => dispatch(deleteCustomerInteractionError(error)));
    }
}
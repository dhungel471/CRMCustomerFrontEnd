import axios from "axios";

export const FETCH_CUSTOMER_BEGIN = 'FETCH_CUSTOMER_BEGIN';
export const FETCH_CUSTOMER_SUCCESS = 'FETCH_CUSTOMER_SUCCESS';
export const FETCH_CUSTOMER_FAILURE = 'FETCH_CUSTOMER_FAILURE';

export const ADD_CUSTOMER_BEGIN = 'ADD_CUSTOMER_BEGIN';
export const ADD_CUSTOMER_SUCCESS = 'ADD_CUSTOMER_SUCCESS';
export const ADD_CUSTOMER_FAILURE = 'ADD_CUSTOMER_FAILURE';

export const UPDATE_CUSTOMER_BEGIN = 'UPDATE_CUSTOMER_BEGIN';
export const UPDATE_CUSTOMER_SUCCESS = 'UPDATE_CUSTOMER_SUCCESS';
export const UPDATE_CUSTOMER_FAILURE = 'UPDATE_CUSTOMER_FAILURE';


export const DELETE_CUSTOMER_BEGIN = 'ADD_CUSTOMER_BEGIN';
export const DELETE_CUSTOMER_SUCCESS = 'ADD_CUSTOMER_SUCCESS';
export const DELETE_CUSTOMER_FAILURE = 'ADD_CUSTOMER_FAILURE';

export const fetchCustomerBegin = () => ({
    type: FETCH_CUSTOMER_BEGIN
});

export const fetchCustomerSuccess = customerdata => ({
    type: FETCH_CUSTOMER_SUCCESS,
    payload: { customerdata }
});

export const fetchCustomerError = error => ({
    type: FETCH_CUSTOMER_FAILURE,
    payload: { error }
});


export const addCustomerBegin = () => ({
    type: ADD_CUSTOMER_BEGIN
});

export const addCustomerSuccess = customerdata => ({
    type: ADD_CUSTOMER_SUCCESS,
    payload: { message: "success" }
});

export const addCustomerError = error => ({
    type: ADD_CUSTOMER_FAILURE,
    payload: { error }
});

export const updateCustomerBegin = () => ({
    type: UPDATE_CUSTOMER_BEGIN
});

export const updateCustomerSuccess = customerdata => ({
    type: UPDATE_CUSTOMER_SUCCESS,
    payload: { message: "success" }
});

export const updateCustomerError = error => ({
    type: UPDATE_CUSTOMER_FAILURE,
    payload: { error }
});


export const deleteCustomerBegin = () => ({
    type: DELETE_CUSTOMER_BEGIN
});

export const deleteCustomerSuccess = id => ({
    type: DELETE_CUSTOMER_SUCCESS,
    payload: { message: "success" }
});

export const deleteCustomerError = error => ({
    type: DELETE_CUSTOMER_FAILURE,
    payload: { error }
});


export function fetchCustomer() {
    return dispatch => {
        dispatch(fetchCustomerBegin());
        axios
        .get("http://localhost:8080/api/customers")
        .then(response => {
            dispatch(fetchCustomerSuccess(response.data))
        })
        .catch(error => dispatch(fetchCustomerError(error)));
    }
}

export function addCustomer(customerdata) {
    return dispatch => {
        dispatch(addCustomerBegin());
        axios
        .post("http://localhost:8080/api/customers", customerdata)
        .then(response => {
            dispatch(addCustomerSuccess(response.data));
        })
        .catch(error => dispatch(addCustomerError(error)));
    }
}

export function updateCustomer(id, customerdata) {
    return dispatch => {
        dispatch(updateCustomerBegin());
        axios
        .post("http://localhost:8080/api/customers"+ id, customerdata)
        .then(response => {
            dispatch(updateCustomerSuccess(response.data));
        })
        .catch(error => dispatch(updateCustomerError(error)));
    }
}

export function deleteCustomer(id) {
    return dispatch => {
        dispatch(deleteCustomerBegin());
        axios
        .delete("http://localhost:8080/api/customers/"+ id)
        .then(response => {
            dispatch(deleteCustomerSuccess(response.data))
        })
        .catch(error => dispatch(deleteCustomerError(error)));
    }
}



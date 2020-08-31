import axios from "axios";

export const FETCH_CUSTOMER_BEGIN = 'FETCH_CUSTOMER_BEGIN';
export const FETCH_CUSTOMER_SUCCESS = 'FETCH_CUSTOMER_SUCCESS';
export const FETCH_CUSTOMER_FAILURE = 'FETCH_CUSTOMER_FAILURE';

export const FETCH_CUSTOMER_WITHID_BEGIN = 'FETCH_CUSTOMER_WITHID_BEGIN';
export const FETCH_CUSTOMER_WITHID_SUCCESS = 'FETCH_CUSTOMER_WITHID_SUCCESS';
export const FETCH_CUSTOMER_WITHID_FAILURE = 'FETCH_CUSTOMER_WITHID_FAILURE';

export const ADD_CUSTOMER_BEGIN = 'ADD_CUSTOMER_BEGIN';
export const ADD_CUSTOMER_SUCCESS = 'ADD_CUSTOMER_SUCCESS';
export const ADD_CUSTOMER_FAILURE = 'ADD_CUSTOMER_FAILURE';

export const UPDATE_CUSTOMER_BEGIN = 'UPDATE_CUSTOMER_BEGIN';
export const UPDATE_CUSTOMER_SUCCESS = 'UPDATE_CUSTOMER_SUCCESS';
export const UPDATE_CUSTOMER_FAILURE = 'UPDATE_CUSTOMER_FAILURE';


export const DELETE_CUSTOMER_BEGIN = 'DELETE_CUSTOMER_BEGIN';
export const DELETE_CUSTOMER_SUCCESS = 'DELETE_CUSTOMER_SUCCESS';
export const DELETE_CUSTOMER_FAILURE = 'DELETE_CUSTOMER_FAILURE';

export const fetchCustomerBegin = () => ({
    type: FETCH_CUSTOMER_BEGIN
});

export const fetchCustomerSuccess = customers => ({
    type: FETCH_CUSTOMER_SUCCESS,
    payload: { customers }
});

export const fetchCustomerError = error => ({
    type: FETCH_CUSTOMER_FAILURE,
    payload: { error }
});

export const fetchCustomerWithIDBegin = () => ({
    type: FETCH_CUSTOMER_WITHID_BEGIN
});

export const fetchCustomerWithIDSuccess = customers => ({
    type: FETCH_CUSTOMER_WITHID_SUCCESS,
    payload: { customers }
});

export const fetchCustomerWithIDError = error => ({
    type: FETCH_CUSTOMER_WITHID_FAILURE,
    payload: { error }
});


export const addCustomerBegin = () => ({
    type: ADD_CUSTOMER_BEGIN
});

export const addCustomerSuccess = customers => ({
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

export const updateCustomerSuccess = customer => ({
    type: UPDATE_CUSTOMER_SUCCESS,
    payload: { customer }
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
    payload: { id }
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

export function fetchCustomerWithID(id) {
    return dispatch => {
        dispatch(fetchCustomerWithIDBegin());
        axios
        .get("http://localhost:8080/api/customers/"+ id)
        .then(response => {
            dispatch(fetchCustomerWithIDSuccess(response.data))
        })
        .catch(error => dispatch(fetchCustomerWithIDError(error)));
    }
}

export function addCustomer(customers) {
    return dispatch => {
        dispatch(addCustomerBegin());
        axios
        .post("http://localhost:8080/api/customers", customers)
        .then(response => {
            dispatch(addCustomerSuccess(response.data));
        })
        .catch(error => dispatch(addCustomerError(error)));
    }
}

export function updateCustomer(id, customers) {
    return dispatch => {
        dispatch(updateCustomerBegin());
        axios
        .put("http://localhost:8080/api/customers/"+ id, customers)
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
            dispatch(deleteCustomerSuccess(id))
        })
        .catch(error => dispatch(deleteCustomerError(error)));
    }
}



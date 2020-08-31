import {FETCH_CUSTOMER_INTERACTION_BEGIN, FETCH_CUSTOMER_INTERACTION_SUCCESS, FETCH_CUSTOMER_INTERACTION_FAILURE}
    from '../actions/customerInteractionAction';
import {ADD_CUSTOMER_INTERACTION_BEGIN, ADD_CUSTOMER_INTERACTION_SUCCESS, ADD_CUSTOMER_INTERACTION_FAILURE}
    from '../actions/customerInteractionAction'

const initialState = {
    customerInteractionsList: [],
    loading: false,
    error: null
};

export default function customerInteractionReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CUSTOMER_INTERACTION_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }

        case FETCH_CUSTOMER_INTERACTION_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                customerInteractionsList: action.payload.customerInteractions
            }

        case FETCH_CUSTOMER_INTERACTION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                customerInteractionsList: []
            }
        case ADD_CUSTOMER_INTERACTION_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case ADD_CUSTOMER_INTERACTION_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            }
        case ADD_CUSTOMER_INTERACTION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }
}
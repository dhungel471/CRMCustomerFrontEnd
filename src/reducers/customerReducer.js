import {FETCH_CUSTOMER_BEGIN, FETCH_CUSTOMER_SUCCESS, FETCH_CUSTOMER_FAILURE} from '../actions/customerAction';
import {
    FETCH_CUSTOMER_WITHID_BEGIN,
    FETCH_CUSTOMER_WITHID_SUCCESS,
    FETCH_CUSTOMER_WITHID_FAILURE
} from '../actions/customerAction';
import {ADD_CUSTOMER_BEGIN, ADD_CUSTOMER_SUCCESS, ADD_CUSTOMER_FAILURE} from '../actions/customerAction'
import {UPDATE_CUSTOMER_BEGIN, UPDATE_CUSTOMER_SUCCESS, UPDATE_CUSTOMER_FAILURE} from '../actions/customerAction'
import {DELETE_CUSTOMER_BEGIN, DELETE_CUSTOMER_SUCCESS, DELETE_CUSTOMER_FAILURE} from '../actions/customerAction'

const initialState = {
    customers: [],
    loading: false,
    error: null
};

export default function customerReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CUSTOMER_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }

        case FETCH_CUSTOMER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                customers: action.payload.customers
            }

        case FETCH_CUSTOMER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                customers: []
            }
        case FETCH_CUSTOMER_WITHID_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }

        case FETCH_CUSTOMER_WITHID_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                customers: action.payload.customers
            }

        case FETCH_CUSTOMER_WITHID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                customers: []
            }

        case ADD_CUSTOMER_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case ADD_CUSTOMER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            }
        case ADD_CUSTOMER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }

        case UPDATE_CUSTOMER_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case UPDATE_CUSTOMER_SUCCESS:
            const customers = state.customers.map((customer) => {
                if (customer.id === action.payload.customer.id) {
                    return {
                        ...action.payload.customer,
                    }
                } else return customer;
            })
            return {
                loading: false,
                error: null,
                customers
            }
        case UPDATE_CUSTOMER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }

        case DELETE_CUSTOMER_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case DELETE_CUSTOMER_SUCCESS:
            return {
                customers: state.customers.filter(c => c.id !== action.payload.id),
                loading: false,
                error: null
            }
        case DELETE_CUSTOMER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }

        default:
            return state;
    }
}
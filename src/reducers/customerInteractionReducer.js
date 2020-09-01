import {FETCH_CUSTOMER_INTERACTION_BEGIN, FETCH_CUSTOMER_INTERACTION_SUCCESS, FETCH_CUSTOMER_INTERACTION_FAILURE}
    from '../actions/customerInteractionAction';
import {ADD_CUSTOMER_INTERACTION_BEGIN, ADD_CUSTOMER_INTERACTION_SUCCESS, ADD_CUSTOMER_INTERACTION_FAILURE}
    from '../actions/customerInteractionAction'
import {UPDATE_CUSTOMER_INTERACTION_BEGIN, UPDATE_CUSTOMER_INTERACTION_SUCCESS, UPDATE_CUSTOMER_INTERACTION_FAILURE}
    from '../actions/customerInteractionAction'
import {DELETE_CUSTOMER_INTERACTION_BEGIN, DELETE_CUSTOMER_INTERACTION_SUCCESS, DELETE_CUSTOMER_INTERACTION_FAILURE}
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
        case UPDATE_CUSTOMER_INTERACTION_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case UPDATE_CUSTOMER_INTERACTION_SUCCESS:
            const customerInteractionsList = state.customerInteractionsList.map((interaction) => {
                if (interaction.id === action.payload.customerInteraction.id) {
                    return {
                        ...action.payload.customerInteraction,
                    }
                } else return interaction;
            })
            return {
                loading: false,
                error: null,
                customerInteractionsList
            }
        case UPDATE_CUSTOMER_INTERACTION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }

        case DELETE_CUSTOMER_INTERACTION_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case DELETE_CUSTOMER_INTERACTION_SUCCESS:
            return {
                customerInteractionsList: state.customerInteractionsList.filter(c => c.id !== action.payload.id),
                loading: false,
                error: null
            }
        case DELETE_CUSTOMER_INTERACTION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }
}
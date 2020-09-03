import {FETCH_CUSTOMER_BEGIN, FETCH_CUSTOMER_SUCCESS, FETCH_CUSTOMER_FAILURE} from '../actions/customerAction';
import customerReducer from './customerReducer';

describe("customer reducer", () => {
    const initialState = {
        customerList: [],
        loading: false,
        error: null
    };

    it ("returns valid initial state", () => {
        const newState = customerReducer(undefined, {type: "@@INIT"});

        expect(newState).toEqual(initialState);
    });

    it("sets loading to true for fetch customer begin", () => {
        const action = {type: FETCH_CUSTOMER_BEGIN};
        const expectedState = {
            ...initialState,
            loading: true,
            error: null
        }

        const newState = customerReducer(initialState, action);

        expect(newState).toEqual(expectedState);
    });

    it("adds customer list to state and sets loading to false when fetch customers succeeds", () => {
        const state = {
            loading: true,
            error: false,
            customerList: null
        };

        const expectedState = {
            loading: false,
            error: null,
            customerList: [{id: "1", name: "Beyonce"}, {id: "2", name: "Christina"}]
        };

        const action = {type: FETCH_CUSTOMER_SUCCESS, payload: {customerList: [{id: "1", name: "Beyonce"}, {id: "2", name: "Christina"}]}};
        const newState = customerReducer(state, action)

        expect(newState).toEqual(expectedState);
    });


    it("sets loading to false, empty customer list, and error message when fetch customer fails", () => {
        const state = {
            loading: true,
            error: false,
            customerList: null
        };

        const expectedState = {
            loading: false,
            error: "an error occurred",
            customerList: []
        };

        const action = {type: FETCH_CUSTOMER_FAILURE, payload: {error: "an error occurred"}};
        const newState = customerReducer(state, action);

        expect(newState).toEqual(expectedState);
    });
});
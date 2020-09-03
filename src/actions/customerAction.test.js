import * as customerAction from './customerAction';

const FETCH_CUSTOMER_BEGIN = 'FETCH_CUSTOMER_BEGIN';
const FETCH_CUSTOMER_SUCCESS = 'FETCH_CUSTOMER_SUCCESS';
const FETCH_CUSTOMER_FAILURE = 'FETCH_CUSTOMER_FAILURE';

describe("customer actions", () => {
    const customerList = [{id: "1", name: "Taylor"}, {id: "2", name: "Alicia"}];

    it("fetchCustomerBegin", () => {
        const expectedAction = {type: customerAction.FETCH_CUSTOMER_BEGIN};
        expect(customerAction.fetchCustomerBegin()).toEqual(expectedAction);
    });

    it("fetchCustomerSuccess", () => {
        const expectedAction = {type: customerAction.FETCH_CUSTOMER_SUCCESS, payload: {customerList: customerList}};

        expect(customerAction.fetchCustomerSuccess(customerList)).toEqual(expectedAction);
    });

    it("fetchCustomerError", () => {
        const expectedAction = {type: customerAction.FETCH_CUSTOMER_FAILURE, payload: {error: "an error occurred"}};
        const error = "an error occurred";
        expect(customerAction.fetchCustomerError(error)).toEqual(expectedAction);
    });
});
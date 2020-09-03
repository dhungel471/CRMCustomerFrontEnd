import { render, fireEvent } from '@testing-library/react'
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import CustomersList from './CustomersList';
import { BrowserRouter } from 'react-router-dom';

const customerList =  [
    {id: '1', firstName: 'Beyonce', lastName: 'knowles', phoneNumber: '678-123-4567', address: '1 Woodrwow Ave, Chicago, IL'}
];

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('CustomersList', () => {

    let props, store, mockDispatch;

    beforeEach(() => {
        const mockFetchCustomer = jest.fn();
        const mockDeleteCustomer = jest.fn();
        mockDispatch = jest.fn();

        const mockState = {
            error: '',
            loading: false,
            customers: customerList
        }

        props = {
            mockDeleteCustomer,
            mockFetchCustomer,
            ...mockState
        }

        const middlewares = [thunk];
        const mockStore = configureStore(middlewares);
        store = mockStore({
            customers: {
                error: '',
                loading: false,
                customerList
            }
        });
    });

  it('finds title', () => {
      const {getByText, queryByText, getByTestId, container} = render(
        <Provider store={store}>
            <CustomersList props={props} />
        </Provider>
        );
    expect(queryByText('Customers')).not.toEqual(null);
  })

  it('finds table column headers', () => {
    const { queryByText } = render(
        <Provider store={store}>
            <CustomersList props={props} />
        </Provider>
        );
        expect(queryByText('Edit/Delete')).not.toEqual(null);
        expect(queryByText('First Name')).not.toEqual(null);
        expect(queryByText('Last Name')).not.toEqual(null);
        expect(queryByText('Phone')).not.toEqual(null);
        expect(queryByText('Address')).not.toEqual(null);
  })

  it('dispatches fetch customer details action on load', () => {
      render(
        <Provider store={store}>
            <CustomersList props={props} />
        </Provider>
        );
        const actions = store.getActions();
        expect(actions).toEqual([ { type: 'FETCH_CUSTOMER_BEGIN' } ]);
  })

  it('displays customer details', () => {
    const { queryByText } = render(
        <Provider store={store}>
            <CustomersList props={props} />
        </Provider>
        );

        expect(queryByText('Beyonce')).toBeVisible();
        expect(queryByText('knowles')).toBeVisible();
        expect(queryByText('678-123-4567')).not.toEqual(null);
        expect(queryByText('1 Woodrwow Ave, Chicago, IL')).toBeVisible();
  })

  it('handles delete button click', () => {
    const { getByText } = render(
        <Provider store={store}>
            <CustomersList props={props} />
        </Provider>
        );

        fireEvent.click(getByText('Delete'));

        const actions = store.getActions();
        expect(actions[1]).toEqual({ type: 'DELETE_CUSTOMER_BEGIN' });
  })

  it('routes to addCustomers on edit button click', () => {
    const { getByText } = render(
        <BrowserRouter>
          <Provider store={store}>
            <CustomersList props={props} />
        </Provider>
        </BrowserRouter>,
      );
  
      fireEvent.click(getByText('Edit'));
      expect(mockHistoryPush).toHaveBeenCalledWith('/api/addCustomers/1');
  })

  it('routes to interactions on details button click', () => {
    const { getByText } = render(
        <BrowserRouter>
          <Provider store={store}>
            <CustomersList props={props} />
        </Provider>
        </BrowserRouter>,
      );
  
      fireEvent.click(getByText('Details'));
      expect(mockHistoryPush).toHaveBeenCalledWith('/api/customers/1/interactions');
  })

});
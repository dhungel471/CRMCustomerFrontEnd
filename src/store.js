import {createStore, applyMiddleware} from 'redux';
import customerReducer from './reducers/customerReducer';
import thunk from "redux-thunk";


export const store = createStore(customerReducer, applyMiddleware(thunk));
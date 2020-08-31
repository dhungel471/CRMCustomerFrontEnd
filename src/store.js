import { createStore, applyMiddleware, compose, combineReducers} from "redux";
import customerReducer from './reducers/customerReducer';
import customerInteractionReducer from './reducers/customerInteractionReducer';
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    combineReducers({customers: customerReducer, customerInteractions: customerInteractionReducer}),
    composeEnhancers(
     applyMiddleware(thunk)
     )
);
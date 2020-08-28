import { createStore, applyMiddleware, compose} from "redux";
import customerReducer from './reducers/customerReducer';
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    customerReducer,
    composeEnhancers(
     applyMiddleware(thunk)
     )
);
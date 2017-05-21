/**
 * Created by albert on 5/18/17.
 */
import {createStore, applyMiddleware, combineReduxers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import roshenImportsApp from '../reducers'
import initialState from '../initialState'


let counter = 0;
const appendMiddleware = (store) => (next) => (action) => {
    return typeof action == 'function' ?
        action(store.dispatch,store.getState) : next(Object.assign({},action,{modified: counter++} ))
};

const loginMiddleware =  (store) => (next) => (action) => {
    next(action)
};
function configureStore( initialState) {
    const composed = compose(
        applyMiddleware(
            thunkMiddleware,
            appendMiddleware,
            loginMiddleware
        )
    );
    return createStore(roshenImportsApp, initialState, composed)
};

const store = configureStore(initialState);
export default store;
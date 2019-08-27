// 仓库

import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import films from './mode/film'
import film2 from './mode/film2'
import Cinema from './mode/Cinema'
import dateil from './mode/dateil'
const reducer = combineReducers({
    films,
    film2,
    Cinema,
    dateil
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));


export default store;



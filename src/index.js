import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import usersReducer from './reducers/usersReducer'
import wishesReducer from './reducers/wishesReducer'
import shoppingReducer from './reducers/shoppingReducer'
import { BrowserRouter as Router } from 'react-router-dom';

const rootReducer = combineReducers({users: usersReducer, wishes: wishesReducer, shopping: shoppingReducer})

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><Router><App/></Router></Provider>, document.getElementById('root'));
registerServiceWorker();

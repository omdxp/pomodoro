import {createStore, combineReducers} from 'redux';
import {authReducer} from '../reducers/authReducer';

export const appReducers = combineReducers({authReducer});

export const store = createStore(appReducers);

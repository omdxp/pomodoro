// import redux
import {createStore, combineReducers} from 'redux';
import {authReducer} from '../reducers/authReducer';

// import redux persist
import {persistReducer, persistStore} from 'redux-persist';

// import store engine
import storage from 'redux-persist/lib/storage';

// define app reducers
const appReducers = combineReducers({authReducer});
const rootReducer = (state, action) => {
  return appReducers(state, action);
};

// persist configuration
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['authReducer'],
};

// define persist reducer
const persistedReducer = persistStore(persistConfig, rootReducer);

// create redux store
export const store = createStore(appReducers);

// create persist store
export const persistor = persistStore(store);

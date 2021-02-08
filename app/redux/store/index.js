// import redux
import {createStore, combineReducers} from 'redux';
import {authReducer} from '../reducers/authReducer';

// import redux persist
import {persistReducer, persistStore} from 'redux-persist';

// import storage engine
import FileSystemStorage from 'redux-persist-filesystem-storage';

// define app reducers
const appReducers = combineReducers({authReducer});
const rootReducer = (state, action) => {
  return appReducers(state, action);
};

// persist configuration
const persistConfig = {
  key: 'root',
  storage: FileSystemStorage,
  whitelist: ['authReducer'],
};

// define persist reducer
const persistedReducer = persistStore(persistConfig, rootReducer);

// create redux store
export const store = createStore(appReducers);

// create persist store
export const persistor = persistStore(store);

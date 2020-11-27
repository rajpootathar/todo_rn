import {persistCombineReducers, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {reducer as taskStore} from './task';
import {createStore} from 'redux';

const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['taskStore'],
  // blacklist: ['taskStore'],
};
const rootReducer = persistCombineReducers(config, {
  taskStore,
});

// Redux: Store
const store = createStore(rootReducer);
// Middleware: Redux Persist Persister
const persistor = persistStore(store);
// Exports
export {store, persistor};

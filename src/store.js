import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// para web
//import storage from 'redux-persist/lib/storage';

import reducers from './reducers';
import rootSaga from './sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};

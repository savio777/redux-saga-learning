import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import {reactotron} from './configs/reactotron';
import AsyncStorage from '@react-native-community/async-storage';
// para web
//import storage from 'redux-persist/lib/storage';

import reducers from './reducers';
import rootSaga from './sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['users', 'todos'],
};

const reactotronMiddleware = reactotron.createEnhancer();

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(reactotronMiddleware, applyMiddleware(sagaMiddleware));

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};

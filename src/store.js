import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
<<<<<<< HEAD
import AsyncStorage from '@react-native-async-storage/async-storage';
=======
import {reactotron} from './configs/reactotron';
import AsyncStorage from '@react-native-community/async-storage';
>>>>>>> add-sagas
// para web
//import storage from 'redux-persist/lib/storage';

import reducers from './reducers';
import rootSaga from './sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
<<<<<<< HEAD
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
=======
  whitelist: ['users', 'todos'],
};

const reactotronMiddleware = reactotron.createEnhancer();

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(reactotronMiddleware, applyMiddleware(sagaMiddleware));

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, enhancer);
>>>>>>> add-sagas
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};

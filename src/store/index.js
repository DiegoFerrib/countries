import { persistStore } from 'redux-persist';
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './modules/root-reducer';

import persistedReducers from './modules/theme-switcher/redux-persist';

const store = createStore(persistedReducers(rootReducer));

export const persistor = persistStore(store);
export default store;

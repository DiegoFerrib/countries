import { legacy_createStore as createStore } from 'redux';
import reducer from './modules/theme-switcher/reducer';

const store = createStore(reducer);

export default store;

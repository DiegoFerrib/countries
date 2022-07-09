import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyles from './styles/Global';
import Routes from './routes';
import history from './services/history';
import Header from './components/Header';

import store, { persistor } from './store';

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
      </Router>
    </PersistGate>
  </Provider>
);

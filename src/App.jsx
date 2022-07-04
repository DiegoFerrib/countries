import { Router } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';
import history from './services/history';
import Header from './components/Header';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyles />
    </Router>
  );
}

export default App;

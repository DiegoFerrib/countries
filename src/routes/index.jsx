import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

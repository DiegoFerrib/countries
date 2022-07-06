import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Page404 from '../pages/404';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="*" component={Page404} />
  </Switch>
);

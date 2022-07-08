import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Details from '../pages/Details';
import Page404 from '../pages/404/404';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/details/:countrie" component={Details} />
    <Route path="*" component={Page404} />
  </Switch>
);

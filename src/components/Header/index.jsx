/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';
import { Header } from './styled';

export default () => (
  <Header>
    <div className="center">
      <Link to="/">
        <h1>Where in the world?</h1>
      </Link>
      <button type="button" className="dark_mode" id="theme_toggle">Dark Mode</button>
    </div>
  </Header>
);

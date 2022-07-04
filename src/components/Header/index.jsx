/* eslint-disable jsx-a11y/label-has-associated-control */
import { Header } from './styled';

export default () => (
  <Header>
    <div className="center">
      <h1>Where in the world?</h1>
      <button type="button" className="dark_mode" id="theme_toggle">Dark Mode</button>
    </div>
  </Header>
);

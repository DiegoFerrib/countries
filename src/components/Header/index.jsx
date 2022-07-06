/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './styled';

import * as actions from '../../store/modules/theme-switcher/actions';
import colors from '../../config/colors';

export default () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const themeSwitcher = () => {
    dispatch(actions.switchTheme());
  };

  return (
    <Header style={{
      backgroundColor: theme === 'light' ? colors.white : colors.darkBlue,
    }}
    >
      <div className="center">
        <Link to="/">
          <h1
            className="inicial_text"
            style={{
              color: theme === 'light' ? colors.darkBlue : colors.white,
            }}
          >
            Where in the world?

          </h1>
        </Link>
        <button
          type="button"
          className="dark_mode"
          id="theme_toggle"
          onClick={themeSwitcher}
          style={{
            color: theme === 'light' ? colors.darkBlue : colors.white,
          }}
        >
          Dark Mode
        </button>
      </div>
    </Header>
  );
};

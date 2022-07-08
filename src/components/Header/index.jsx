/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaMoon, FaSun } from 'react-icons/fa';

import { Center } from '../../styles/GlobalStyles';
import { Header } from './styled';
import * as actions from '../../store/modules/theme-switcher/actions';
import colors from '../../config/colors';

export default () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeSwitcher.theme);

  const themeSwitcher = () => {
    dispatch(actions.switchTheme());
  };

  return (
    <Header style={{
      backgroundColor: theme === 'light' ? colors.white : colors.darkBlue,
      padding: '0 30px',
    }}
    >
      <Center
        className="center"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
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
          onClick={themeSwitcher}
          style={{
            color: theme === 'light' ? colors.darkBlue : colors.white,
          }}
        >
          {theme === 'light' ? <FaMoon color={colors.veryDarkBlue} size={20} /> : <FaSun color={colors.white} size={20} />}
          <span>Dark Mode</span>
        </button>
      </Center>
    </Header>
  );
};

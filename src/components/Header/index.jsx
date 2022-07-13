/* eslint-disable jsx-a11y/label-has-associated-control */
// Libraries imports
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// My imports
import { Center, Header } from './styles';
import * as actions from '../../store/modules/theme-switcher/actions';
import * as funcs from '../../functions/themeSwitcherFunctions';

export default () => {
  const theme = useSelector(({ themeSwitcher }) => themeSwitcher.theme);
  const dispatch = useDispatch();

  const themeSwitcher = () => {
    dispatch(actions.switchTheme());
  };

  return (
    <Header
      bgColor={funcs.themeColorCondition('element', theme)}
      fontColor={funcs.themeColorCondition('font', theme)}
    >
      <Center as="nav">
        <Link to="/">
          <h1>Where in the world?</h1>
        </Link>
        <button
          aria-label="Change theme"
          type="button"
          onClick={themeSwitcher}
        >
          {funcs.iconSwitcher(theme)}
          {theme === 'light' ? <span>Dark Mode</span> : <span>Light Mode</span>}
        </button>
      </Center>
    </Header>
  );
};

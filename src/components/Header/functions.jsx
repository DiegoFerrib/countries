import { FaMoon, FaSun } from 'react-icons/fa';
import colors from '../../config/colors';

export const themeColorCondition = (fontOrElement, theme) => {
  if (fontOrElement === 'font') {
    return theme === 'light' ? colors.darkBlue : colors.white;
  } if (fontOrElement === 'element') {
    return theme === 'light' ? colors.white : colors.darkBlue;
  }
  return 'white';
};

export const iconSwitcher = (theme) => {
  if (theme === 'light') {
    return <FaMoon color={colors.veryDarkBlue} size={20} />;
  }
  return <FaSun color={colors.white} size={20} />;
};

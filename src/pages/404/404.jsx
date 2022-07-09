import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Center } from '../../styles/Global';

import { Page404 } from './styled';
import colors from '../../config/colors';
import history from '../../services/history';

export default () => {
  const theme = useSelector(({ themeSwitcher }) => themeSwitcher.theme);

  useEffect(() => {
    setTimeout(() => history.push('/'), 4000);
  }, []);

  return (
    <Page404 style={{
      backgroundColor: theme === 'light' ? colors.veryLightGray : colors.veryDarkBlueDark,
      minHeight: '90vh',
    }}
    >
      <Center className="center">
        <h2 style={{
          color: theme === 'light' ? colors.darkBlue : colors.white,
        }}
        >
          Page not found!

        </h2>
      </Center>
    </Page404>
  );
};

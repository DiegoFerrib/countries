/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { DetailsPage } from './styled';
import { CountrieDetails, ButtonWrapper } from './localComponents';
import { Center } from '../../styles/Global';
import Loading from '../../components/Loading';
import { fetchCountrieData } from './internalFunctions';
import history from '../../services/history';
import * as funcs from '../../functions/themeSwitcherFunctions';

export default function Details({ match }) {
  const theme = useSelector((state) => state.themeSwitcher.theme);

  const countrieName = match.params.countrie;
  const [isLoading, setIsLoading] = useState(false);
  const [countrieData, setCountrieData] = useState('');

  useEffect(() => {
    fetchCountrieData(countrieName, setIsLoading, setCountrieData);
  }, []);

  return (
    <DetailsPage
      bgColor={funcs.themeColorCondition('element', theme)}
    >
      <Center>
        <ButtonWrapper
          value="Back"
          bgColor={funcs.themeColorCondition('element', theme)}
          fontColor={funcs.themeColorCondition('font', theme)}
          onClick={() => history.push('/')}
        />

        {countrieData
        && (
          <CountrieDetails countrieData={countrieData} theme={theme} key={countrieData.flags.svg} />
        )}
      </Center>
      <Loading isLoading={isLoading} />
    </DetailsPage>

  );
}

Details.propTypes = {
  match: PropTypes.shape({}).isRequired,
};

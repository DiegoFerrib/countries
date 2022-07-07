/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import history from '../../services/history';
import { Button, CountrieDetails, DetailsPage } from './styled';
import { Center } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import colors from '../../config/colors';
import axios from '../../services/axios';

export default function Details({ match }) {
  const theme = useSelector((state) => state.themeSwitcher.theme);

  const countryName = match.params.countrie;
  const [isLoading, setIsLoading] = useState(false);
  const [countrieData, setCountrieData] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/name/${countryName}`);
        setCountrieData(data[0]);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setIsLoading(false);
        toast.error('Could not get data!');
      }
    })();
  }, []);

  console.log(countrieData.name);

  return (
    <>
      <DetailsPage style={{
        backgroundColor: theme === 'light' ? colors.veryLightGray : colors.veryDarkBlueDark,
      }}
      >
        <Center style={{
          padding: '70px 0',
        }}
        >
          <div className="button-separator">
            <Button
              style={{
                backgroundColor: theme === 'light' ? colors.white : colors.darkBlue,
                color: theme === 'light' ? colors.darkBlue : colors.white,
              }}
              onClick={() => history.push('/')}
            >
              Back
            </Button>
          </div>
        </Center>
        <Center>
          {countrieData
        && (
        <CountrieDetails>
          <img src={countrieData.flags.svg} alt="" />
          <section>
            <h2>{countrieData.name.common}</h2>
            <div className="countrie_data">
              <div className="data">
                <p>Native Name: </p>
                <p>Population: </p>
                <p>Region: </p>
                <p>Sub Region: </p>
                <p>Capital: </p>
              </div>
              <div className="data">
                <p>Top Level Domain: </p>
                <p>Currencies: </p>
                <p>Languages: </p>
              </div>
            </div>
          </section>
        </CountrieDetails>
        )}

        </Center>
      </DetailsPage>
      <Loading isLoading={isLoading} />
    </>
  );
}

Details.propTypes = {
  match: PropTypes.shape({}).isRequired,
};

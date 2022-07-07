/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { Button, CountrieDetails, DetailsPage } from './styled';
import { Center } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import history from '../../services/history';
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
        setIsLoading(false);
        toast.error('Could not get data!');
      }
    })();
  }, []);

  return (
    <DetailsPage style={{
      backgroundColor: theme === 'light' ? colors.veryLightGray : colors.veryDarkBlueDark,
      minHeight: '90vh',
    }}
    >
      <Center style={{
        padding: '0 30px',
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

        {countrieData
        && (
        <CountrieDetails className="countrie_details">
          <img src={countrieData.flags.svg} alt={countrieData.name.common} />
          <section
            className="data"
            style={{
              color: theme === 'light' ? colors.darkBlue : colors.white,
            }}
          >
            <h2>{countrieData.name.common}</h2>
            <div className="countrie_data">
              <div className="data">
                <p>
                  <strong>Native Name:</strong>
                  {' '}
                  {countrieData.name.official}
                </p>
                <p>
                  <strong>Population:</strong>
                  {' '}
                  {countrieData.population.toLocaleString('en-US')}
                </p>
                <p>
                  <strong>Region:</strong>
                  {' '}
                  {countrieData.region}
                </p>
                <p>
                  <strong>Sub Region:</strong>
                  {' '}
                  {countrieData.subregion && countrieData.subregion}
                </p>
                <p>
                  <strong>Capital:</strong>
                  {' '}
                  {countrieData.capital && countrieData.capital[0]}
                </p>
              </div>
              <div className="data">
                <p>
                  <strong>Top Level Domain:</strong>
                  {' '}
                  {countrieData.tld && countrieData.tld[0]}
                </p>
                <p>
                  <strong>Currencies:</strong>
                  {' '}
                  {countrieData.currencies && (
                    Object.values(
                      countrieData.currencies,
                    ).map(
                      (currencie) => currencie.name,
                    )
                  ).join(', ')}
                </p>
                <p>
                  <strong>Languages:</strong>
                  {' '}
                  {countrieData.languages && (
                    Object.values(
                      countrieData.languages,
                    ).map(
                      (language) => language,
                    )
                  ).join(', ')}
                </p>
              </div>
            </div>
          </section>
        </CountrieDetails>
        )}

      </Center>
      <Loading isLoading={isLoading} />
    </DetailsPage>

  );
}

Details.propTypes = {
  match: PropTypes.shape({}).isRequired,
};

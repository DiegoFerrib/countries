import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  GridMap, Search, Countrie,
} from './styled';

import { Center } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import colors from '../../config/colors';
import axios from '../../services/axios';

const centerSearchStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '30px',
  flexWrap: 'wrap',
};

const centerGridMapStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 260px))',
  justifyContent: 'space-between',
  gridGap: '50px',
};

export default () => {
  const theme = useSelector(({ themeSwitcher }) => themeSwitcher.theme);

  const [countries, setCountries] = useState('');
  const [searchedCountrie, setSearchedCountrie] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Search all countries
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get('/all');
        setCountries(data);
        setIsLoading(false);
      } catch {
        toast.error('Could not get data!');
        setIsLoading(false);
      }
    })();
  }, []);

  const filterCountriesPerRegion = async (filterValue) => {
    try {
      setIsLoading(true);
      if (filterValue === 'all') {
        const { data } = await axios.get(`/${filterValue}`);
        setCountries(data);
        setIsLoading(false);
        return;
      }

      const { data } = await axios.get(`/region/${filterValue}`);
      setCountries(data);
      setIsLoading(false);
    } catch {
      toast.error('Could not get data!');
      setIsLoading(false);
    }
  };

  return (
    <>
      <section style={{
        backgroundColor: theme === 'light' ? colors.veryLightGray : colors.veryDarkBlueDark,
        minHeight: '90vh',
      }}
      >
        <Search>
          <Center style={centerSearchStyle}>
            <label
              htmlFor="search"
              style={{
                backgoundColor: theme === 'light' ? colors.white : colors.darkBlue,
              }}
            >
              <input
                type="search"
                id="search"
                placeholder="Search for a countrie..."
                value={searchedCountrie}
                onChange={({ target }) => setSearchedCountrie(target.value)}
                style={{
                  color: theme === 'light' ? colors.darkBlue : colors.white,
                }}
              />
            </label>
            <select
              defaultValue="all"
              onChange={({ target }) => filterCountriesPerRegion(target.value)}
              style={{
                backgoundColor: theme === 'light' ? colors.white : colors.darkBlue,
              }}
            >
              <option value="all">All</option>
              <option value="africa">Africa</option>
              <option value="america">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </Center>
        </Search>

        <GridMap>
          <Center style={centerGridMapStyle} className="center">
            { countries && !searchedCountrie && countries.map(({
              name, region, capital, flags, population,
            }) => (
              <Link to={`/details/${name.common.toLowerCase()}`} key={flags.svg} className="countrie">
                <Countrie style={{
                  backgoundColor: theme === 'light' ? colors.white : colors.darkBlue,
                }}
                >
                  <img src={flags.svg} alt={`Flag: ${name.common}`} />
                  <div
                    className="informations"
                    style={{
                      color: theme === 'light' ? colors.darkBlue : colors.white,
                    }}
                  >
                    <h2>{name.common}</h2>
                    <p>
                      <strong>Population:</strong>
                      {' '}
                      {population.toLocaleString('en-US')}
                    </p>
                    <p>
                      <strong>Region:</strong>
                      {' '}
                      {region}
                    </p>
                    <p>
                      <strong>Capital:</strong>
                      {' '}
                      {capital}
                    </p>
                  </div>
                </Countrie>
              </Link>
            ))}
          </Center>
        </GridMap>
      </section>
      <Loading isLoading={isLoading} />
    </>
  );
};

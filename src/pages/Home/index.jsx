import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';
import {
  GridMap, Search, Countrie,
} from './styled';

import { Center } from '../../styles/Global';
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
        toast.error('Could not get data!', {
          position: 'top-right',
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: theme === 'light' ? 'light' : 'dark',
        });
        setIsLoading(false);
      }
      setSearchedCountrie('');
    })();
  }, []);

  const filterCountriesPerRegion = async (filterValue) => {
    try {
      setIsLoading(true);
      if (filterValue === 'all') {
        const { data } = await axios.get(`/${filterValue}`);
        setCountries(data);
        setSearchedCountrie('');
        setIsLoading(false);
        return;
      }

      const { data } = await axios.get(`/region/${filterValue}`);
      setCountries(data);
      setSearchedCountrie('');
      setIsLoading(false);
    } catch {
      toast.error('Could not get data!');
      setIsLoading(false);
    }
  };

  const searchCountrie = async (e) => {
    e.preventDefault();
    if (searchedCountrie.length > 0) {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/name/${searchedCountrie}`);
        setCountries(data);
        setSearchedCountrie('');
        setIsLoading(false);
      } catch {
        setSearchedCountrie('');
        setIsLoading(false);
        toast.error('Could not get data!');
      }
    }
  };

  return (
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
            <FaSearch color={theme === 'light' ? colors.darkBlue : colors.white} size={20} />
            <form
              method="get"
              onSubmit={searchCountrie}
              autoComplete="off"
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

            </form>
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

      {isLoading ? <Loading isLoading={isLoading} /> : (
        <GridMap>
          <Center style={centerGridMapStyle} className="center">
            { countries && countries.map(({
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
      )}
    </section>
  );
};

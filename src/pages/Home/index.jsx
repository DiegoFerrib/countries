import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';
import {
  Home, GridMap, Search, Countrie, Center, Select, Option,
} from './styled';

import Loading from '../../components/Loading';
import colors from '../../config/colors';
import axios from '../../services/axios';

import * as funcs from '../../functions/themeSwitcherFunctions';

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
    <Home bgColor={funcs.themeColorCondition('element', theme)} fontColor={funcs.themeColorCondition('font', theme)}>
      <Search>
        <Center>
          <form
            method="get"
            onSubmit={searchCountrie}
            autoComplete="off"
          >
            <FaSearch size={20} />
            <input
              type="search"
              placeholder="Search for a countrie..."
              value={searchedCountrie}
              onChange={({ target }) => setSearchedCountrie(target.value)}
            />
          </form>

          <Select
            defaultValue="all"
            onChange={({ target }) => filterCountriesPerRegion(target.value)}
            bgColor={funcs.themeColorCondition('element', theme)}
          >
            <Option value="teste">Teste</Option>
            <option value="all">All</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </Select>
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
    </Home>
  );
};

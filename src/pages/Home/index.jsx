import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import {
  Home, GridMap, Search, Center, Select, Option,
} from './styles';
import { Countrie } from './localComponents';
import Loading from '../../components/Loading';

import * as funcs from '../../functions/themeSwitcherFunctions';
import {
  toCaptalize, searchAllCountries, filterCountriesPerRegion, searchCountrie,
} from './internalFunctions';

export default () => {
  const theme = useSelector(({ themeSwitcher }) => themeSwitcher.theme);
  const options = ['all', 'africa', 'america', 'asia', 'europe', 'oceania'];
  const [countries, setCountries] = useState('');
  const [searchedCountrie, setSearchedCountrie] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    searchAllCountries(
      setIsLoading,
      setCountries,
      setSearchedCountrie,
      theme,
    );
  }, []);

  const search = (e) => {
    e.preventDefault();
    searchCountrie(
      searchedCountrie,
      setIsLoading,
      setCountries,
      setSearchedCountrie,
    );
  };

  return (
    <Home
      bgColor={funcs.themeColorCondition('element', theme)}
      fontColor={funcs.themeColorCondition('font', theme)}
    >
      <Search>
        <Center>
          <form
            method="get"
            onSubmit={search}
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
            bgColor={funcs.themeColorCondition('element', theme)}
            defaultValue="default"
            onChange={({ target }) => filterCountriesPerRegion(
              target.value,
              setIsLoading,
              setCountries,
              setSearchedCountrie,
            )}
          >
            <Option disabled value="default">Filter by Region</Option>
            {options.map((option) => (
              <Option key={option} value={option}>
                {toCaptalize(option)}
              </Option>
            ))}
          </Select>
        </Center>
      </Search>

      {isLoading ? <Loading isLoading={isLoading} /> : (
        <GridMap>
          { countries && countries.map(({
            name, region, capital, flags, population,
          }) => (
            <Link to={`/details/${name.common.toLowerCase()}`} key={flags.svg}>
              <Countrie
                bgColor={funcs.themeColorCondition('element', theme)}
                fontColor={funcs.themeColorCondition('font', theme)}
                flags={flags}
                name={name}
                population={population}
                region={region}
                capital={capital}
              />
            </Link>
          ))}
        </GridMap>
      )}
    </Home>
  );
};

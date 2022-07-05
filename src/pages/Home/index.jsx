/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  GridMap, Search, Countrie,
} from './styled';

import Loading from '../../components/Loading';
import axios from '../../services/axios';

export default () => {
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
      toast.error('OI');
      setIsLoading(false);
    }
  };
  return (
    <>
      <Search>
        <div className="center">
          <label htmlFor="search">
            <input
              type="search"
              id="search"
              placeholder="Search for a countrie..."
              value={searchedCountrie}
              onChange={({ target }) => setSearchedCountrie(target.value)}
            />
          </label>
          <select defaultValue="all" onChange={({ target }) => filterCountriesPerRegion(target.value)}>
            <option value="all">All</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </Search>

      <GridMap>
        <div className="center">
          { countries && !searchedCountrie && countries.map(({
            name, region, capital, flags, population,
          }, index) => (
            <Link to="/">
              <Countrie key={index}>
                <img src={flags.svg} alt={`Flag: ${name.common}`} />
                <div className="informations">
                  <h2>{name.common}</h2>
                  <p>
                    Population:
                    {' '}
                    {population}
                  </p>
                  <p>
                    Region:
                    {' '}
                    {region}
                  </p>
                  <p>
                    Capital:
                    {' '}
                    {capital}
                  </p>
                </div>
              </Countrie>
            </Link>
          ))}
        </div>
      </GridMap>
      <Loading isLoading={isLoading} />
    </>
  );
};

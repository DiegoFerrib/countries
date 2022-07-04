import { useEffect, useState } from 'react';
import {
  GridMap, Home, Search, Countrie,
} from './styled';

import Loading from '../../components/Loading';
import axios from '../../services/axios';

export default () => {
  const [countries, setCountries] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('/all');
        setCountries(data);
        setIsLoading(false);
      } catch {
        console.log('erro');
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <Home>
      <Search>
        <div className="center">
          <label htmlFor="search">
            <input type="search" name="" id="search" placeholder="Search for a countrie..." />
          </label>
          <select>
            <option value="" disabled selected>Filter by Region</option>
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
          { countries && countries.map((countrie) => (
            <Countrie>
              <img src={countrie.flags.svg} alt={`Flag: ${countrie.name.common}`} />
              <div>{countrie.name.common}</div>
            </Countrie>
          ))}
        </div>
      </GridMap>
      <Loading isLoading={isLoading} />
    </Home>
  );
};

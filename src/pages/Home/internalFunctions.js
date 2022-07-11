import { toast } from 'react-toastify';
import axios from '../../services/axios';

export const toCaptalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export const searchAllCountries = async (
  setIsLoading,
  setCountries,
  setSearchedCountrie,
) => {
  try {
    setIsLoading(true);
    const { data } = await axios.get('/all');
    setCountries(data);
    setIsLoading(false);
  } catch {
    toast.error('Could not get data!');
    setIsLoading(false);
  }
  setSearchedCountrie('');
};

let first = true;

export const filterCountriesPerRegion = async (
  filterValue,
  setIsLoading,
  setCountries,
  setSearchedCountrie,
) => {
  if (first && filterValue === 'all') return;

  try {
    setIsLoading(true);
    if (filterValue === 'all') {
      const { data } = await axios.get(`/${filterValue}`);
      setCountries(data);
      setSearchedCountrie('');
      setIsLoading(false);
      first = false;
      return;
    }

    const { data } = await axios.get(`/region/${filterValue}`);
    setCountries(data);
    setSearchedCountrie('');
    setIsLoading(false);
    first = false;
  } catch {
    toast.error('Could not get data!');
    setIsLoading(false);
    first = false;
  }
};

export const searchCountrie = async (
  searchedCountrie,
  setIsLoading,
  setCountries,
  setSearchedCountrie,
) => {
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

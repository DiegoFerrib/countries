import { toast } from 'react-toastify';
import axios from '../../services/axios';

export const toCaptalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export const searchAllCountries = async (
  setIsLoading,
  setCountries,
  setSearchedCountrie,
  theme,
) => {
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
};

export const filterCountriesPerRegion = async (
  filterValue,
  setIsLoading,
  setCountries,
  setSearchedCountrie,
) => {
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

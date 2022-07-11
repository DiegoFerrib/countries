import { toast } from 'react-toastify';
import axios from '../../services/axios';

export const fetchCountrieData = async (countrieName, setIsLoading, setCountrieData) => {
  try {
    setIsLoading(true);
    const { data } = await axios.get(`/name/${countrieName}`);
    setCountrieData(data[0]);
    setIsLoading(false);
  } catch {
    setIsLoading(false);
    toast.error('Could not get data!');
  }
};

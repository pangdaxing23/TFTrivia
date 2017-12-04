import { apiUrl } from './constants';
export const fetchData = async () => {
  return (await fetch(apiUrl)).json();
};

import { useState, useEffect } from 'react';
import { getBreweries } from '../services/breweryService';

interface Brewery {
  id_brewery: number;
  brewery_name: string;
  country: string;
  region: string;
  city: string;
  adress: string;
  inauguration_date: string;
  brewery_photourl: string;
  onClick?: (id: number) => void;
}

export const useBreweryAPI = () => {
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [breweriesLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        const response = await getBreweries();
        console.log('Data fetched:', response.data);
        setBreweries(response.data);
      } catch (Error) {
        setError(`Error fetching breweries: ${Error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchBreweries();
  }, []);
  return { breweries, breweriesLoading, error };
};

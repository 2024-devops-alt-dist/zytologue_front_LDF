import { useState, useEffect } from 'react';
import {getBeers } from '../services/beerService';

interface Beer {
  id: number;
  beer_name: string;
  abv: number;
  colour: string;
  body: string;
  bitterness: string;
  release_date: string;
  category: string;
  photourl: string;
  description?: string;
  onClick?: (id: number) => void;
}

export const useBeerAPI = () => {

    const [beers, setBeers] = useState<Beer[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBeers = async () => {
            try {
                const response = await getBeers();
                console.log('Data fetched:', response.data);
                setBeers(response.data);
            } catch (Error) {
                setError(`Error fetching beers: ${Error}`);
            } finally {
                setLoading(false);
            }
        };
        fetchBeers();
    }, []);
    return { beers, loading, error };
}
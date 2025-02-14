import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BeerCard from '../components/BeerCard';
import BreweryCard from '../components/BreweryCard';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const [beers, setBeers] = useState<
    { id_beer: number; beer_name: string; photourl: string }[]
  >([]);
  const [breweries, setBreweries] = useState<
    {
      id_brewery: number;
      brewery_name: string;
      country: string;
      city: string;
      brewery_photourl: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const beersResponse = await fetch('http://localhost:3000/beers');
        const breweriesResponse = await fetch(
          'http://localhost:3000/breweries'
        );
        const beersData = await beersResponse.json();
        const breweriesData = await breweriesResponse.json();

        const validBeers = Array.isArray(beersData) ? beersData : [];
        const validBreweries = Array.isArray(breweriesData)
          ? breweriesData
          : [];

        setBeers(
          validBeers.filter(beer =>
            beer.beer_name.toLowerCase().includes(query.toLowerCase())
          )
        );
        setBreweries(
          validBreweries.filter(brewery =>
            brewery.brewery_name.toLowerCase().includes(query.toLowerCase())
          )
        );
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div>
      <h1>Search Results for "{query}"</h1>

      {/* Beers Section */}
      {beers.length > 0 && (
        <div>
          <h2 className="text-xl font-bold">Beers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {beers.map(beer => (
              <BeerCard key={beer.id_beer} {...beer} />
            ))}
          </div>
        </div>
      )}

      {/* Breweries Section */}
      {breweries.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mt-8">Breweries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {breweries.map(brewery => (
              <BreweryCard key={brewery.id_brewery} {...brewery} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;

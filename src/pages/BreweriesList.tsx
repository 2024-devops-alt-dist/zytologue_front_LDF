import React from 'react';
import BreweryCard from '../components/BreweryCard';
import { useNavigate } from 'react-router-dom';
import { useBreweryAPI } from '../hooks/useBreweryApi';

const BreweryList: React.FC = () => {
  const { breweries, loading, error } = useBreweryAPI();
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="breweryList">
      {breweries.map(brewery => (
        <BreweryCard
          id_brewery={brewery.id_brewery}
          key={brewery.id_brewery}
          brewery_name={brewery.brewery_name}
          country={brewery.country}
          city={brewery.city}
          onClick={() => navigate(`/breweries/${brewery.id_brewery}`)}
        />
      ))}
    </div>
  );
};

export default BreweryList;

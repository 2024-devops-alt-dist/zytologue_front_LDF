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
          id={brewery.id}
          key={brewery.id}
          brewery_name={brewery.brewery_name}
          country={brewery.country}
          region={brewery.region}
          city={brewery.city}
          adress={brewery.adress}
          inauguration_date={brewery.inauguration_date}
          onClick={() => navigate(`/breweries/${brewery.id}`)}
        />
      ))}
    </div>
  );
};

export default BreweryList;

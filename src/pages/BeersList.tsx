import React from 'react';
import BeerCard from '../components/BeerCard';
import { useBeerAPI } from '../hooks/useBeerApi';
import { useNavigate } from 'react-router-dom';

const BeerList: React.FC = () => {
  const { beers, loading, error } = useBeerAPI();
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="beerList">
      {beers.map(beer => (
        <BeerCard
          id_beer={beer.id_beer}
          key={beer.id_beer}
          beer_name={beer.beer_name}
          abv={beer.abv}
          bitternes={beer.bitternes}
          photourl={beer.photourl}
          description={beer.description}
          onClick={() => navigate(`/beers/${beer.id_beer}`)}
        />
      ))}
    </div>
  );
};

export default BeerList;

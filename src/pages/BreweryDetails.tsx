import React from 'react';
import { useBreweryAPI } from '../hooks/useBreweryApi';
import { useBeerAPI } from '../hooks/useBeerApi';
import { useParams, useNavigate } from 'react-router-dom';
import BeerCard from '../components/BeerCard';

const BreweryDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { breweries, breweriesLoading, error } = useBreweryAPI();
  const { beers, loading: beersLoading, error: beersError } = useBeerAPI();

  const brewery = breweries.find(b => b.id_brewery === parseInt(id || '', 10));
  const breweryBeers = beers.filter(
    b => b.id_brewery === parseInt(id || '', 10)
  );
  if (breweriesLoading || beersLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (beersError) return <div>Error: {beersError}</div>;

  if (!brewery) return <div>brewery not found</div>;

  const formattedDate = new Date(brewery.inauguration_date).toLocaleDateString(
    'es-ES',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={brewery.brewery_photourl}
            alt={brewery.brewery_name}
            className="w-full h-full object-cover rounded-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brewery.brewery_name}</h2>
          <p>
            <strong>Name:</strong> {brewery.brewery_name}%
          </p>
          <p>
            <strong>Region:</strong> {brewery.region}
          </p>
          <p>
            <strong>Country:</strong> {brewery.country}
          </p>
          <p>
            <strong>City:</strong> {brewery.city}
          </p>
          <p>
            <strong>Address:</strong> {brewery.adress}
          </p>
          <p>
            <strong>Inauguration Date:</strong> {formattedDate}
          </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => navigate('/breweries')}
            >
              Back to brewery list
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h3 className="text-xl font-bold">Beers from this Brewery:</h3>
        {breweryBeers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {breweryBeers.map(beer => (
              <BeerCard
                key={beer.id_beer}
                id_beer={beer.id_beer}
                beer_name={beer.beer_name}
                abv={beer.abv}
                bitternes={beer.bitternes}
                photourl={beer.photourl}
                onClick={() => navigate(`/beers/${beer.id_beer}`)}
              />
            ))}
          </div>
        ) : (
          <p>No beers found for this brewery.</p>
        )}
      </div>
    </div>
  );
};

export default BreweryDetails;

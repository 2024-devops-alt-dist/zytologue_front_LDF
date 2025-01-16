import React from 'react';
import { useBreweryAPI } from '../hooks/useBreweryApi';
import { useParams, useNavigate } from 'react-router-dom';

const BeerDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { breweries, loading, error } = useBreweryAPI();
  const brewery = breweries.find(b => b.id_brewery === parseInt(id || '', 10));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
    <div className="card lg:card-side bg-base-100 shadow-xl">
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
  );
};

export default BeerDetails;

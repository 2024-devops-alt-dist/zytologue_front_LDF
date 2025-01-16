import React from 'react';
import { useBeerAPI } from '../hooks/useBeerApi';
import { useParams, useNavigate } from 'react-router-dom';

const BeerDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { beers, loading, error } = useBeerAPI();
  const beer = beers.find(b => b.id_beer === parseInt(id || '', 10));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!beer) return <div>Beer not found</div>;

  const formattedDate = new Date(beer.release_date).toLocaleDateString(
    'es-ES',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={beer.photourl} alt={beer.beer_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{beer.beer_name}</h2>
        <p>
          <strong>ABV:</strong> {beer.abv}%
        </p>
        <p>
          <strong>Colour:</strong> {beer.colour}
        </p>
        <p>
          <strong>Body:</strong> {beer.body}
        </p>
        <p>
          <strong>Bitterness:</strong> {beer.bitternes}
        </p>
        <p>
          <strong>Release Date:</strong> {formattedDate}
        </p>
        {beer.description && (
          <p>
            <strong>Description:</strong> {beer.description}
          </p>
        )}
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => navigate('/beers')}
          >
            Back to Beer list
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeerDetails;

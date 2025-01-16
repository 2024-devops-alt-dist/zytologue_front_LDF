import React from 'react';

interface BeerCardProps {
  id_beer: number;
  beer_name: string;
  abv?: number;
  bitternes?: number;
  photourl: string;
  description?: string;
  onClick?: (id: number) => void;
}

const BeerCard: React.FC<BeerCardProps> = ({
  id_beer,
  beer_name,
  abv,
  bitternes,
  photourl,
  description,
  onClick,
}) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photourl} alt={beer_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{beer_name}</h2>
        <p>
          <strong>ABV:</strong> {abv}%
        </p>
        <p>
          <strong>Bitterness:</strong> {bitternes}
        </p>
        {description && (
          <p>
            <strong>Description:</strong> {description}
          </p>
        )}
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => onClick && onClick(id_beer)}
          >
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;

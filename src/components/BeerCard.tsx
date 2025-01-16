import React from 'react';

interface BeerCardProps {
  id: number;
  beer_name: string;
  abv: number;
  colour: string;
  body: string;
  bitternes: number;
  release_date: string;
  id_category: number;
  photourl: string;
  description?: string;
  onClick?: (id: number) => void;
}

const BeerCard: React.FC<BeerCardProps> = ({
  id,
  beer_name,
  abv,
  colour,
  body,
  bitternes,
  release_date,
  photourl,
  description,
  onClick,
}) => {
  const formattedDate = new Date(release_date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div
      className="card lg:card-side bg-base-100 shadow-xl"
      onClick={() => onClick && onClick(id)}
    >
      <figure>
        <img src={photourl} alt={beer_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{beer_name}</h2>
        <p>
          <strong>ABV:</strong> {abv}%
        </p>
        <p>
          <strong>Colour:</strong> {colour}
        </p>
        <p>
          <strong>Body:</strong> {body}
        </p>
        <p>
          <strong>Bitterness:</strong> {bitternes}
        </p>
        <p>
          <strong>Release Date:</strong> {formattedDate}
        </p>
        {description && (
          <p>
            <strong>Description:</strong> {description}
          </p>
        )}
        <div className="card-actions justify-end">
          <button className="btn btn-primary">More Info</button>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;

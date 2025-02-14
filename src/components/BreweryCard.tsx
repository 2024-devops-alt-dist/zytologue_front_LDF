import React from 'react';

export interface BreweryCardProps {
  id_brewery: number;
  brewery_name: string;
  country: string;
  city: string;
  brewery_photourl: string;
  onClick?: (id: number) => void;
}

const BreweryCard: React.FC<BreweryCardProps> = ({
  id_brewery,
  brewery_name,
  country,
  city,
  brewery_photourl,
  onClick,
}) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="w-48 h-48">
        <img
          src={brewery_photourl}
          alt={brewery_name}
          className="w-full h-full object-cover rounded-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{brewery_name}</h2>
        <p>
          <strong>Country:</strong> {country}
        </p>
        <p>
          <strong>City:</strong> {city}
        </p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => onClick && onClick(id_brewery)}
          >
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default BreweryCard;

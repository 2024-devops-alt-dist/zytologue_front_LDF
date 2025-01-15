import React from 'react';

interface BreweryCardProps {
  id: number;
  brewery_name: string;
  country: string;
  region: string;
  city: string;
  adress: string;
  inauguration_date: string;
  onClick?: (id: number) => void;
}

const BreweryCard: React.FC<BreweryCardProps> = ({
  id,
  brewery_name,
  country,
  region,
  city,
  adress,
  inauguration_date,
  onClick,
}) => {
  return (
    <div className="card" onClick={() => onClick && onClick(id)}>
      <h2>{brewery_name}</h2>
      <p>{country}</p>
      <p>{region}</p>
      <p>{city}</p>
      <p>{adress}</p>
      <p>{inauguration_date}</p>
    </div>
  );
};

export default BreweryCard;

import React from "react"

interface BeerCardProps {
    id: number;
    name: string;
    type: string;
    imageURL: string;
    description?: string;
    onClick?: (id: number) => void;
}


const BeerCard: React.FC<BeerCardProps> = ({ id, name, type, imageURL, description, onClick }) => {
  return (
    <div className="card" onClick={() => onClick && onClick(id)}>
      <img src={imageURL} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{type}</p>
        {description && <p>{description}</p>}
      </div>
    </div>
  ); 
}

export default BeerCard;
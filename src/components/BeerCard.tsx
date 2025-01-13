import React from "react"

interface BeerCardProps {
    name: string;
    type: string;
    imageURL: string;
    descpription?: string;
    onClick?: () => void;
}


const BeerCard: React.FC<BeerCardProps> = ({ name, type, imageURL, descpription, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
        <img src={imageURL} alt={name} />
        <div>
            <h2>{name}</h2>
            <p>{type}</p>
            {descpription && <p>{descpription}</p>}
        </div>
    </div>
  ) 
}

export default BeerCard;
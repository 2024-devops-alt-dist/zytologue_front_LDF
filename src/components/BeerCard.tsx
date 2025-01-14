import React from "react"

interface BeerCardProps {
    id: number;
    beer_name: string;
    abv: number;
    colour: string;
    body: string;
    bitterness: string;
    release_date: string;
    category: string;
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
  bitterness,
  release_date,
  category,
  photourl,
  description,
  onClick,
}) => {
  return (
    <div className="card" onClick={() => onClick && onClick(id)}>
      <img src={photourl} alt={beer_name} />
      <div>
        <h2>{beer_name}</h2>
        <p>{abv}</p>
        <p>{colour}</p>
        <p>{body}</p>
        <p>{bitterness}</p>
        <p>{category}</p>
        <p>{release_date}</p>
        <p>{category}</p>
        {description && <p>{description}</p>}
        <p>{id}</p>
        <p></p>
      </div>
    </div>
  );
};

export default BeerCard;
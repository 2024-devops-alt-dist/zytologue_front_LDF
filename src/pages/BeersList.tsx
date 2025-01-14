import React from "react";
import BeerCard from '../components/BeerCard';
import { useBeerAPI } from "../hooks/useBeerApi";
import { useNavigate } from "react-router-dom";

const BeerList: React.FC= () => {
    const { beers, loading, error } = useBeerAPI();
    const navigate = useNavigate();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="beerList">
            {beers.map((beer) => (
                <BeerCard
                 id={beer.id}
                 key={beer.id}
                 name= {beer.name}
                 type= {beer.type}
                 imageURL= {beer.imageURL}
                 description= {beer.description}
                 onClick={() => navigate(`/beers/${beer.id}`)}
                />
            ))}
        </div>
    );
};

export default BeerList;
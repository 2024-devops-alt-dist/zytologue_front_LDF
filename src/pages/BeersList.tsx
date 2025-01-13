import React from "react";
import BeerCard from "../components/BeerCard";

const BeerList: React.FC= () => {
    const beers = [
        {

        }
    ]
    return (
        <div>
            <h1>Beer List</h1>
            <div>
                {beers.map((beer, index) => (
                    <BeerCard key={index} name={beer.name} type={beer.type} imageURL={beer.imageURL} />
                ))}
            </div>
        </div>
    )
}

export default BeerList;
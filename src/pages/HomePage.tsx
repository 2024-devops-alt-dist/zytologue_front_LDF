import React from 'react';

const Homepage: React.FC = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url('/hero_photo.JPG')`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold"> </h1>
          <p className="mb-5">
            Welcome to the Zytologues by Luchito. This is a place where you can
            find the best beers and breweries in the world.
          </p>
          <button className="btn btn-primary">Get Started!</button>
        </div>
      </div>
    </div>
  );
};
export default Homepage;

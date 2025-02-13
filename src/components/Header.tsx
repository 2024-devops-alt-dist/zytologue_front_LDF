import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getBeers } from '../services/beerService';
import { getBreweries } from '../services/breweryService';
import { BeerCardProps } from '../components/BeerCard';
import { BreweryCardProps } from '../components/BreweryCard';

const Header: React.FC = () => {
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [data, setData] = useState<{ name: string }[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const beerResponse = await getBeers();
        const breweryResponse = await getBreweries();
        const beers = beerResponse.data.map((item: BeerCardProps) => ({
          name: item.beer_name,
        }));

        const breweries = breweryResponse.data.map(
          (item: BreweryCardProps) => ({
            name: item.brewery_name,
          })
        );

        setData([...beers, ...breweries]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    if (value.trim() === '' || data.length === 0) {
      setSuggestions([]);
      return;
    }
    const filtered = data
      .filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
      .map(item => item.name);
    setSuggestions(filtered.slice(0, 5));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim() !== '') {
      navigate(`/search?query=${search}`);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearch(suggestion);
    setSuggestions([]);
    navigate(`/search?query=${suggestion}`);
  };

  return (
    <div className="navbar bg-neutral-800 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/beers">Beers</Link>
            </li>
            <li>
              <Link to="/breweries">Breweries</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/about" className="btn btn-ghost text-xl">
          Zytologues by Luchito
        </Link>
      </div>

      <div className="navbar-end relative">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            placeholder="Search beers..."
            className="input input-bordered input-sm text-white"
            value={search}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary btn-sm">
            🔍
          </button>
        </form>

        {suggestions.length > 0 && (
          <ul className="absolute top-full left-0 bg-white text-black w-52 rounded-lg shadow-lg z-10">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}

        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;

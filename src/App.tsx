import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BeerList from './pages/BeersList';
import BreweryList from './pages/BreweriesList';
import Homepage from './pages/HomePage';
import Header from './components/Header';
import About from './pages/About';
import './App.css';
import BeerDetails from './pages/BeerDetails';
import BreweryDetails from './pages/BreweryDetails';
import SearchPage from './pages/searchPage';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/beers/:id" element={<BeerDetails />} />
        <Route path="/breweries/:id" element={<BreweryDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/breweries" element={<BreweryList />} />
        <Route path="/beers" element={<BeerList />} />
      </Routes>
    </Router>
  );
};
export default App;

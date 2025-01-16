import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BeerList from './pages/BeersList';
import BreweryList from './pages/BreweriesList';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BeerList />} />
        <Route path="/breweries" element={<BreweryList />} />
        <Route path="/beers" element={<BeerList />} />
      </Routes>
    </Router>
  );
};
export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BeerList from './pages/BeersList';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/beers" element={<BeerList />} />
      </Routes>
    </Router>
  );
}
export default App

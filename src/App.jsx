import './App.css';
import Header from './components/Layout/Header';
import Home from './components/Home';
import Restaurants from './components/Restaurants';
import About from './components/About';
import Restaurant from './components/Restaurant';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Information from './components/Information';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="restaurants" element={<Restaurants />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurants/:id" element={<Restaurant />} />
        <Route path="/restaurants/:id/info" element={<Information />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

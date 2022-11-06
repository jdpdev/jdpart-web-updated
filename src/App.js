import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from './Header' 
import './App.css';
import Printmaking from './Printmaking';
import SelectedImage from './SelectedImage';
import { usePortfolioStore } from './usePortfolioStore';
import { Events } from './Events';

function App() {
  const fetchImages = usePortfolioStore((state) => state.fetch);
  const fetchEvents = usePortfolioStore((state) => state.fetchEvents);

  useEffect(() => {
    fetchImages();
    fetchEvents();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/image/:id" element={<SelectedImage />} />
          <Route path="/calendar" element={<Events />} />
          <Route path="/" element={<Printmaking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

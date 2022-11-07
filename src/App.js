import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Helmet } from "react-helmet";

import Header from './Header' 
import './App.css';
import Printmaking from './Printmaking';
import SelectedImage from './SelectedImage';
import { usePortfolioStore } from './usePortfolioStore';
import { Events } from './Events';
import { Contact } from './Contact';

function App() {
  const fetchImages = usePortfolioStore((state) => state.fetch);
  const fetchEvents = usePortfolioStore((state) => state.fetchEvents);

  useEffect(() => {
    fetchImages();
    fetchEvents();
  }, []);

  return (
    <div className="App">
      <Helmet>
        <title>printmaking | jason dupertuis</title>
        <meta name="description" content="ordinary printmaking, with feeling" />
      </Helmet>
      <Router>
        <Header />
        <Routes>
          <Route path="/image/:id" element={<SelectedImage />} />
          <Route path="/calendar" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Printmaking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

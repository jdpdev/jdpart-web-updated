import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from './Header' 
import './App.css';
import Printmaking from './Printmaking';
import SelectedImage from './SelectedImage';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/image/:id" element={<SelectedImage />} />
          <Route path="/" element={<Printmaking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

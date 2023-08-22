import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main1 from './components/menu/main1';
import Main2 from './components/menu/main2';

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Main1 />} />
          <Route path="/brandBinggeul" element={<Main2 />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

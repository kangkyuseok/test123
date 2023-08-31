import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main1 from './components/menu/main1';
import Binggeul from './components/menu/binggeul';
import Runmecy from './components/menu/runmecy';
import Lifeborn from './components/menu/lifeborn';
import Squall from './components/menu/squall';
import Everybottle from './components/menu/everybottle';
import BrandPage from './components/menu/BrandPage';
const App = () => {
  return (
    <Router>
      <div>
        <Header />
       
        <Routes>
          <Route path="/" element={<Main1 />} />
          <Route path="/brandBinggeul" element={<Binggeul />} />
          <Route path="/brandRunmecy" element={<Runmecy />} />
          <Route path="/brandLifeborn" element={<Lifeborn />} />
          <Route path="/brandSquall" element={<Squall />} />
          <Route path="/brandEverybottle" element={<Everybottle />} />
          <Route path="/brand" element={<BrandPage />} />
        </Routes>
        
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;

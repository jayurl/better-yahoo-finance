import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Stocks from './pages/Stocks';
import StockDetail from './pages/StockDetail';
import Calendar from './pages/Calendar';
import Options from './pages/Options';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/stocks/:symbol" element={<StockDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/options" element={<Options />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

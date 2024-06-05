import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import NavBar from './components/Navigation/NavBar';
import Introduction from './components/Introduction/Introduction';
import Architecture from './components/Architecture/Architecture';
import DDL from './components/DDL/DDL';
import DML from './components/DML/DML';
import Queries from './components/Queries/Queries';
import Indexes from './components/Indexes/Indexes';
import Transactions from './components/Transactions/Transactions';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/data-definition-language" element={<DDL />} />
        <Route path="/data-manipulation-language" element={<DML />} />
        <Route path="/advanced-queries" element={<Queries />} />
        <Route path="/indexes-and-performance" element={<Indexes />} />
        <Route path="/transactions-and-concurrency" element={<Transactions />}/>
      </Routes>
    </BrowserRouter>

  );
};

export default App;
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Introduction from './components/Introduction/Introduction';
import General from './components/General/General';
import Syntax from './components/Syntax/Syntax';
import DataTypes from './components/DataTypes/DataTypes';
import Queries from './components/Queries/Queries';
import Performance from './components/Performance/Performance';
import Tools from './components/Tools/Tools';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Introduction />} />
          <Route path="introduction" element={<Introduction />} />
          <Route path="general" element={<General />} />
          <Route path="syntax" element={<Syntax />} />
          <Route path="data-types" element={<DataTypes />} />
          <Route path="queries" element={<Queries />} />
          <Route path="performance" element={<Performance />} />
          <Route path="tools" element={<Tools />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
};

export default App;
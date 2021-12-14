import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageTrial from './page/page-trial';
import PageSource from './page/page-source';
import PageProcess from './page/page-process';
import PageHome from "./page/page-home";
function App() {

  return (
    <Router>
      <div className="page-trial">
        <div className="bg-main-trial border-r16">
          <div className="wrapper">
            <Routes>
              <Route exact path="/" element={<PageHome />} />
              <Route path="/register" element={<PageTrial />} />
              <Route path="/source" element={<PageSource />} />
              <Route path="/process" element={<PageProcess />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;

import { Route, Router, Routes } from "react-router-dom";
// import { Component } from 'react';
import Map from '../pages/map';
import DataManage from '../pages/data-manage';

const CRouter = () => (
  <Router>
      <Routes>
        <Route path="/" element={<Map />}></Route>
        <Route path="/menu2" element={<DataManage />}></Route>
      </Routes>
    </Router>
)

export default CRouter;
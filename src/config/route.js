import { Route, Router, Routes } from "react-router-dom";
// import { Component } from 'react';
import Map from '../pages/map';
import DataManage from '../pages/data-manage';
import Login from '../pages/login';

const CRouter = () => (
  <Router location={'/login'}>
      <Routes>
        <Route path="/" element={<Map />}/>
        <Route path="/menu2" element={<DataManage />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
)

export default CRouter;

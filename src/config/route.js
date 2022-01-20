import { Route, Router, Routes } from "react-router-dom";
import Map from '../pages/map';
import DataManage from '../pages/data-manage';

const route = () => {
  return (
    <Router>
      <Routes>
        <Route path="/menu1" element={<Map />}></Route>
        <Route path="/menu2" element={<DataManage />}></Route>
        <Route path="/menu3"></Route>
      </Routes>
    </Router>
  );
}

export default route;
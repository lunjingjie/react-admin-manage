import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';

const router = () => {
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
    </Routes>
  </Router>
};

export default router;

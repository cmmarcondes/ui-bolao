import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';

import Home from 'pages/Home';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" element={<Home />} />
    </Switch>
  </Router>
);
export default Routes;

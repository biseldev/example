import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import App from './views/App';

export default () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

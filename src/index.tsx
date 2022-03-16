import React                 from 'react';
import ReactDOM              from 'react-dom';
import {
    BrowserRouter as Router
}                            from 'react-router-dom';

import Application           from './Application';

import './scss/index.scss';


ReactDOM.render(
      <Router>
          <Application />
      </Router>,
  document.getElementById('application')
);
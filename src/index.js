import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import App from './App';
import { googleTrackId } from './service/constants';
import './index.css';

const initializeReactGA = () => {
  ReactGA.initialize(googleTrackId);
  ReactGA.pageview('/', 'myResume-tracker', 'my resume');
};

initializeReactGA();

ReactDOM.render(
  <App />, document.getElementById('root'),
);

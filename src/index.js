import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { LastLocationProvider } from 'react-router-last-location';

import {maroon100} from '@idfc/ccl-commons/palette';

import { FontColor, FontSize } from '@idfc/ccl-commons/enums';

console.log( maroon100);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LastLocationProvider>
        <p style={{color: FontColor.maroon100, fontSize: `${FontSize.SIZE_36}px`}}>Primary</p>
      </LastLocationProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

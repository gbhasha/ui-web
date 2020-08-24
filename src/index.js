import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { LastLocationProvider } from 'react-router-last-location';
import { Button } from 'ccl-mock';
console.log(Button);


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LastLocationProvider>
        <Button variant="primary">Primary</Button>
      </LastLocationProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

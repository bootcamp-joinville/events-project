import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery'; // Bootstrap peerdependency (https://getbootstrap.com/docs/4.1/getting-started/webpack/#importing-javascript)
import 'popper.js'; // Bootstrap peerdependency (https://getbootstrap.com/docs/4.1/getting-started/webpack/#importing-javascript)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

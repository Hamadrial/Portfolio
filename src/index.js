import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from "./components/App";
// Styles
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

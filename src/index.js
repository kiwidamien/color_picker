import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ColorPicker from './ColorPicker';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ColorPicker />, document.getElementById('root'));
registerServiceWorker();

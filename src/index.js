import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

// плагин для языков
import './i18n';

ReactDOM.render(
  <Suspense fallback={<div></div>}>
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
  </ Suspense>,
  document.getElementById('root')
);


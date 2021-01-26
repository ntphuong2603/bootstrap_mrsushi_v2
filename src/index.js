import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { Provider } from 'react-redux'
import MrsushiStore from './store/mrsushi-store';

ReactDOM.render(
  <Provider store={MrsushiStore()}>
    <Routes/>
  </Provider>
  ,document.getElementById('root')
);
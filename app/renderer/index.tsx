import React from 'react';
import ReactDom from 'react-dom';
import Router from './router';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

ReactDom.render(<App />, document.getElementById('root'));

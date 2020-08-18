import React from 'react';
import ReactDOM from 'react-dom';

const app = document.querySelector('#app');

ReactDOM.render(
  <h1>Hello Cocktails!</h1>,
  app,
  () => {
    console.log('Application rendered!');
  }
);

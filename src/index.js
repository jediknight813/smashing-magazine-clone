import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Nav from './components/Nav'
import Content from './components/Content'


ReactDOM.render(
  <React.StrictMode>
      <Header />
      <Nav />
      <Content />
  </React.StrictMode>,
  document.getElementById('root')
);

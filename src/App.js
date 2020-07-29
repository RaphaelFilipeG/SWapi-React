import React from 'react';
import Header from './components/header';
import api from './services/api';
import Main from './pages/main';

const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
);

export default App;

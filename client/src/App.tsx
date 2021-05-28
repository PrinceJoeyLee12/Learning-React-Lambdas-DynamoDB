import React from 'react';
import './App.css';
import './bootstrap.min.css';
import Todos from './components/todos';
import Header from './components/layouts/Header';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <Todos />
      </div>
    </div>
  );
};

export default App;

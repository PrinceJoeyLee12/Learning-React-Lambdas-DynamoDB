import React from 'react';
import './App.css';
import './bootstrap.min.css';
import Todos from './components/todos';
import Header from './components/layouts/Header';

//Redux
import { Provider } from 'react-redux';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <div className='container'>
          <Todos />
        </div>
      </div>
    </Provider>
  );
};

export default App;

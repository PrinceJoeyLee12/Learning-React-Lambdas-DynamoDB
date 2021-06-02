import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './bootstrap.min.css';
import Todos from './components/Todos';
import Header from './components/Header';

//Redux
import { Provider } from 'react-redux';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <div className='container' style={{ paddingTop: '20px' }}>
            <Switch>
              <Route exact path='/' component={Todos} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

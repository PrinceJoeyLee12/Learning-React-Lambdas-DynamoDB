import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './bootstrap.min.css';
import Todos from './components/todos';
import CompletedTodos from './components/todos/CompletedTodos';
import NotCompletedTodos from './components/todos/NotCompletedTodos';
import Header from './components/layouts/Header';

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
              <Route exact path='/completed-todos' component={CompletedTodos} />
              <Route
                exact
                path='/not-completed-todos'
                component={NotCompletedTodos}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

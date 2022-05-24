import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Client Auth Project</h2>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/logout'>Logout</Link>
          </li>
          <li>
            <Link to='/friendlist'>Friend List</Link>
          </li>
          <li>
            <Link to="/addfriend">Add Friend</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/login' component={Login} />
          <Route exact path='/friendlist' component={FriendsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

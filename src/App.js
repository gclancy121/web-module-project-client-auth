import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


import Login from './components/Login';
import FriendsList from './components/FriendsList';
import Logout from './components/Logout';
import AddFriend from './components/AddFriend';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const logout = () => {
    localStorage.removeItem('token');
  }
  
  return (
    <Router>
      <div className="App">
        <h2>Client Auth Project</h2>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link onClick={logout} to='/logout'>Logout</Link>
          </li>
          <li>
            <Link to='/friendslist'>Friend List</Link>
          </li>
          <li>
            <Link to="/addfriend">Add Friend</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/login' component={Login} />
          <PrivateRoute exact path='/friendslist' component={FriendsList} />
          <Route path='/logout' component={Logout}  />
          <PrivateRoute path='/addfriend' component={AddFriend} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

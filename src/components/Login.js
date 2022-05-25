import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

const initialState = {
    username: 'Bloom',
    password: 'Tech'
};



function Login (props) {
  const {push} = useHistory();
  const [state, setState] = useState(initialState);

  const handleChange = e => {
    setState({
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  const login = evt => {
    evt.preventDefault();
    axios.post('http://localhost:9000/api/login', state)
    .then(res => {
      console.log(res)
      localStorage.setItem("token", res.data.token);
      push('/friendslist');
    })
  }



  return (
    <form onSubmit={login}>
      <input 
      type='text'
      name='username'
      value={state.username}
      onChange={handleChange}
      placeholder="Username"
      />
      <input 
        type='password'
        name='password'
        value={state.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button>Log In</button>
    </form>
  )
}

export default Login;
import React, {useState} from 'react';
import axios from 'axios';

const initialState = {
  credentials: {
    username: 'Bloom',
    password: 'Tech'
  }
};



function Login (props) {
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
    axios.post('http://localhost:9000/api/login', state.credentials)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      props.history.push('/friendlist');
    })
  }



  return (
    <form onSubmit={login}>
      <input 
      type='text'
      name='username'
      value={state.credentials.username}
      onChange={handleChange}
      placeholder="Username"
      />
      <input 
        type='password'
        name='password'
        value={state.credentials.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button>Log In</button>
    </form>
  )
}

export default Login;
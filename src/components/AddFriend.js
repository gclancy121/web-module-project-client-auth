import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const initialState = {
  name: '',
  age: '',
  email: ''
}

function AddFriend () {
const {push} = useHistory();
const [state, setState] = useState(initialState);

const addFriend = (evt) => {
  evt.preventDefault();
  const newFriend = {
    id: Date.now(),
    name: evt.target.name.value,
    age: evt.target.age.value,
    email: evt.target.email.value
  }
  
  axios.post('http://localhost:9000/api/friends',  newFriend, {
    headers: {
      authorization: localStorage.getItem('token')
    }
  })
  .then(res => {
    console.log(res)
    setState(initialState);
    push('/friendslist');
  })
  .catch(err => {
    console.log(err)
  })
  // setState(initialState);
}

  const handleChange = (evt) => {
    setState({...state, [evt.target.name]: evt.target.value })
  }

  return (
    <form onSubmit={addFriend}>
      <input 
        type='text'
        name='name'
        value={state.name}
        onChange={handleChange}
        placeholder="Type Friend name"
      />
      <input 
      type='text'
      name='age'
      value={state.age}
      onChange={handleChange}
      placeholder="Type Friend age"
    />
    <input 
        type='email'
        name='email'
        value={state.email}
        onChange={handleChange}
        placeholder="Type Friend email"
      />
      <button>Submit Friend</button>
    </form>
  )
}

export default AddFriend;
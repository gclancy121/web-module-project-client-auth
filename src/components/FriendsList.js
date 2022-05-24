import React, {useState, useEffect} from "react";
import axios from "axios";


const initialFriends = {
  data: []
}

function FriendsList () {
const [friendState, setFriendState] = useState(initialFriends);

const getFriends = () => {
  axios.get('http://localhost:9000/api/friends', {
    headers: {
      authorization: localStorage.getItem('token')
    }
  })
  .then(res => {
    setFriendState({
      data: res.data
    })
  })
}

useEffect(() => {
  getFriends();
}, [])

console.log(friendState)
  return (
    <div>
      {friendState.data.map(item => {
        return (
          <div key={item.id} className = 'friend'>
            <h2>Name: {item.name}</h2>
            <h3>Age: {item.age}</h3>
            <h3>email: {item.email}</h3>
            </div>
        )
      })}
    </div>
  )
}

export default FriendsList;
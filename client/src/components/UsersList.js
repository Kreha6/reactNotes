import React from 'react';
import UserListItem from './UserListItem.js';

export const UsersList = (props) => {
  let users = null;
  if(props.users.length>0){
    users = props.users[0].map(user => {

      return <UserListItem key={user._id} user={user}/>
    })
  }
  else{
    users = <p>No users</p>
  }

  return (
    <div>
      Users:
      <ul className="">
        {users}
      </ul>
    </div>
  )
}

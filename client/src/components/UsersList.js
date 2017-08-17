import React from 'react';
import {UserListItem} from './UserListItem.js';

export const UsersList = (props) => {

  const users = props.users.map(user => {
    return <UserListItem key={user._id} movie={user}/>
  })

  return (
    <div>
      <ul className="">
        {users}
      </ul>
    </div>
  )
}

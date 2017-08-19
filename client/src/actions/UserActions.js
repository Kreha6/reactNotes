import { USER_ADD, REQUEST_USERS, UPDATE_USER, DELETE_USER } from '../constants/UserActionTypes';
import axios from 'axios';

export function addUser(user) {
  // axios.post('http://localhost:4200/users/add/user', {user:user}).then(() => {
  //   return {
  //     type: USER_ADD,
  //     user: user
  //   }
  // }).catch(err => console.log(err));

  return function (dispatch) {
    axios.post('http://localhost:4200/users/add/user', {user:user})
      .then(() => dispatch({
        type: USER_ADD,
        user: user
      })).catch(err => console.log(err));
  }
}




export function getUsers() {
  axios.get('http://localhost:4200/users').then(response => {
    return {
      type: REQUEST_USERS,
      users:response
    }
  }).catch(err => console.log(err));

}

export function updateUser(user) {
  axios.post('http://localhost:4200/users/update/' + user._id, {user:user}).then(() => {
    return {
      type: UPDATE_USER,
      user: user,
      id:user._id
    }
  }).catch(err => console.log(err));

}

export function deleteUser(id) {
  axios.get('http://localhost:4200/users/delete/' + id).then(() => {
    return {
      type: DELETE_USER,
      id:id
    }
  }).catch(err => console.log(err));

}

import { USER_ADD, REQUEST_USERS, UPDATE_USER, DELETE_USER } from '../constants/UserActionTypes';
import axios from 'axios';

export function addUser(user) {
  return function (dispatch) {
    axios.post('http://localhost:4200/users/add/user', {user:user})
      .then(() => dispatch({
        type: USER_ADD,
        user: user
      })).catch(err => console.log(err));
  }
}

export function getUsers() {
  return function (dispatch) {
    axios.get('http://localhost:4200/users')
    .then((response) => dispatch({
      type: REQUEST_USERS,
      users:response.data
    })).catch(err => console.log(err));
  }
}

export function updateUser(user,_id) {

  return function (dispatch) {
    axios.post('http://localhost:4200/users/update/' + _id, {user:user})
    .then(() => dispatch({
      type: UPDATE_USER,
      user: user,
      id:_id
      })).catch(err => console.log(err));
  }

}

export function deleteUser(id) {

  return function (dispatch) {
    axios.get('http://localhost:4200/users/delete/' + id)
    .then(() => dispatch({
      type: DELETE_USER,
      id:id
      })).catch(err => console.log(err));
  }

}

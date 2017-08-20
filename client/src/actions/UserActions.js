import { USER_ADD, REQUEST_USERS, UPDATE_USER, DELETE_USER, SIGN_USER_OUT, SIGN_USER_IN } from '../constants/UserActionTypes';
import axios from 'axios';

export function addUser(user) {
  return function (dispatch) {
    axios.post('http://localhost:4200/users/add/user', {user:user})
      .then(() =>
      {

    }
  ).catch(err => console.log(err));
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
    .then(() =>
    {

  }
  ).catch(err => console.log(err));
  }

}

export function deleteUser(id) {

  return function (dispatch) {
    axios.get('http://localhost:4200/users/delete/' + id)
    .then(() =>
    {

  }).catch(err => console.log(err));
  }
}

export function signUserIn(user) {
  return {
    type: SIGN_USER_IN,
    user: user
  }
}
export function signUserOut() {
  return {
    type: SIGN_USER_OUT
  }
}

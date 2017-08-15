import { USER_ADD, REQUEST_USERS, UPDATE_USER, DELETE_USER } from '../constants/UserActionTypes';

export function addUser(user) {
  return {
    type: USER_ADD,
    user: user
  }
}

export function getUsers() {
  return {
    type: REQUEST_USERS
  }
}

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    user: user,
    id:user._id
  }
}

export function deleteUser(id) {
  return {
    type: DELETE_USER,
    id:id
  }
}

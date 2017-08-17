import axios from 'axios';

const initialState = {
  users: []
};

export function users(state = initialState, action) {
  switch (action.type) {

    case 'USER_ADD':
      {
        axios.post('http://localhost:4200/users/add/user', {user: action.user}).then(() => {

        }).catch(err => console.log(err));
        return {
          ...state,
          users: [
            ...state.users,
            action.user
          ]
        }
        break;
      }

    case 'REQUEST_USERS':
      {
        axios.get('http://localhost:4200/users').then(response => {
          return Object.assign({}, state, {users: response})
        }).catch(err => console.log(err));
        break;
      }
      //tu podawaj jeszcze index tego elementu starego
    case 'UPDATE_USER':
      {
        var index = state.users.map((x) => {
          return x._id;
        }).indexOf(action.id);

        axios.post('http://localhost:4200/users/update/' + action.id, {user: action.user}).then(() => {
          return {
            ...state,
            users: [
              ...state.users.slice(0, index),
              action.user,
              ...state.users.slice(index + 1)
            ]
          }
        }).catch(err => console.log(err));
        break;
      }
      //same here
    case 'DELETE_USER':
      {
        var index = state.users.map((x) => {
          return x._id;
        }).indexOf(action.id);

        axios.get('http://localhost:4200/users/delete/' + action.id).then(() => {
          return {
            ...state,
            users: [
              ...state.users.slice(0, index),
              ...state.users.slice(index + 1)
            ]
          }
        }).catch(err => console.log(err));
        break;
      }

    default:
      return state;
  }
}

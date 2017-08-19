const initialState = {
  users: []
};

export function users(state = initialState, action) {
  switch (action.type) {

    case 'USER_ADD':
      {
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
        return Object.assign({}, state, {
          users: action.users
          })
        break;
      }
    case 'UPDATE_USER':
      {
        var index = state.users.map((x) => {
          return x._id;
        }).indexOf(action.id);

        return {
          ...state,
          users: [
            ...state.users.slice(0, index),
            action.user,
            ...state.users.slice(index + 1)
          ]
        }
        break;
      }
    case 'DELETE_USER':
      {
        var index = state.users.map((x) => {
          return x._id;
        }).indexOf(action.id);

        return {
          ...state,
          users: [
            ...state.users.slice(0, index),
            ...state.users.slice(index + 1)
          ]
        }

        break;
      }

    default:
      return state;
  }
}

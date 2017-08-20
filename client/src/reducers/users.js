const initialState = {
  users: []
};

export function users(state = initialState, action) {
  switch (action.type) {
    case 'USER_ADD':
    console.log(state.users)
      {
        return state
        break;
      }
    case 'REQUEST_USERS':
      {

        return {
          ...state,
          users: [
            action.users
          ]
        }
        break;
      }
    case 'UPDATE_USER':
      {

        // var index = state.users[0].map((x) => {
        //   return x._id;
        // }).indexOf(action._id);
        //
        // var index = state.users[0].findIndex(x => x._id==action._id);

        return state
        // return {
        //   ...state,
        //   users: [
        //     ...state.users.slice(0, index),
        //     action.user,
        //     ...state.users.slice(index + 1)
        //   ]
        // }
        break;
      }
    case 'DELETE_USER':
      {
        var index = state.users.map((x) => {
          return x._id;
        }).indexOf(action.id);

        return state
        break;
      }
    default:
      return state;
  }
}

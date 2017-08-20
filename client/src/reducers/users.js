const initialState = {
  users: [],
  signedUser:{}
};

export function users(state = initialState, action) {
  switch (action.type) {
    case 'USER_ADD':
      {
        return state
      }
    case 'REQUEST_USERS':
      {
        return {
          ...state,
          users:
            action.users
        }
      }
    case 'UPDATE_USER':
      {
        return state;
      }
    case 'DELETE_USER':
      {
        return state
      }
    case 'SIGN_USER_IN':
    {
      return{
        ...state,
        signedUser:action.user
      }
    }
    case 'SIGN_USER_OUT':
    {
      return{
        ...state,
        signedUser:{}
      }
    }
    default:
      return state;
  }
}

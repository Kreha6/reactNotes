const initialState = {
  items: []
};

export function items(state = initialState, action) {
  switch (action.type) {
    case 'ITEM_ADD':
      {
        return state
      }
    case 'REQUEST_ITEMS':
      {
        return {
          ...state,
          items:
            action.items

        }
      }
    case 'UPDATE_ITEM':
      {
        return state;
      }
    case 'DELETE_ITEM':
      {
        return state
      }
    default:
      return state;
  }
}

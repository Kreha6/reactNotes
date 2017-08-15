import axios from 'axios';

const initialState = {
  items: []
};



export function items(state = initialState, action) {
  switch (action.type) {

    case 'ITEM_ADD':
      {
        axios.post('http://localhost:4200/itemss/add/post',
        {item: action.item})
        .then(() => {
          return {
          ...state,
          items: [
            ...state.items,
            action.item
          ]
        }
        }
          ).catch(err => console.log(err))
          break;
      }

    case 'REQUEST_ITEMS':
      {
        axios.get('http://localhost:4200/items').then(response => {
          return {
            ...state,
            items: [
              ...state.items,
              ...response
            ]
          }
        })
        break;
      }
      //tu podawaj jeszcze index tego elementu starego
    case 'UPDATE_ITEM':
      {
        axios.post('http://localhost:4200/items/update/'+action.id, {
          user: action.item
        })
        .then(() => {
          return {
            ...state,
            items: [
              ...state.items.slice(0, action.index),
              action.item,
              ...state.items.slice(action.index + 1)
              ]
        }
        }
          )
        .catch(err => console.log(err))
        break;
      }
      //same here
      case 'DELETE_ITEM':
        {
          axios.get('http://localhost:4200/items/delete/'+ action.id)
          .then(() => {
            return {
              ...state,
              items: [
                ...state.items.slice(0, action.index),
                ...state.items.slice(action.index + 1)
                    ]
            }
          }

          )
          .catch(err => console.log(err))
          break;
        }


    default:
      return state;
  }
}

import { ITEM_ADD, REQUEST_ITEMS, UPDATE_ITEM, DELETE_ITEM } from '../constants/ItemActionTypes';

export function addItem(item) {
  return function (dispatch) {
    axios.post('http://localhost:4200/items/add/user', {item:item})
      .then(() =>
      {
        // axios.get('http://localhost:4200/users')
        // .then((response) => dispatch({
        //   type: REQUEST_USERS,
        //   users:response.data
        // })).catch(err => console.log(err));
    }
  ).catch(err => console.log(err));
  }
}

export function getItems() {
  return function (dispatch) {
    axios.get('http://localhost:4200/items')
    .then((response) => dispatch({
      type: REQUEST_ITEMS,
      items:response.data
    })).catch(err => console.log(err));
  }
}

export function updateItem(item,_id) {

  return function (dispatch) {
    axios.post('http://localhost:4200/items/update/' + _id, {item:item})
    .then(() =>
    {

      // axios.get('http://localhost:4200/users')
      // .then((response) => dispatch({
      //   type: REQUEST_USERS,
      //   users:response.data
      // })).catch(err => console.log(err));
  }
  ).catch(err => console.log(err));
  }

}

export function deleteItem(id) {

  return function (dispatch) {
    axios.get('http://localhost:4200/items/delete/' + id)
    .then(() =>
    {
      // dispatch({
      // type: DELETE_USER,
      // id:id
      // })
  }).catch(err => console.log(err));
  }

}

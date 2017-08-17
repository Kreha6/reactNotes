import { ITEM_ADD, REQUEST_ITEMS, UPDATE_ITEM, DELETE_ITEM } from '../constants/ItemActionTypes';

export function addItem(item) {
  return {
    type: ITEM_ADD,
    item: item
  }
}

export function getItems() {
  return {
    type: REQUEST_ITEMS
  }
}

export function updateItem(item) {
  return {
    type: UPDATE_ITEM,
    item: item,
    id: item._id
  }
}

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    id:id
  }
}

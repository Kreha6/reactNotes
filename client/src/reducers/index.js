import { combineReducers } from 'redux';
import { users } from './users';
import { items } from './items';

const rootReducer = combineReducers({
users: users,
items: items
});

export default rootReducer;

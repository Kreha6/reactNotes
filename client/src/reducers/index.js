import { combineReducers } from 'redux';
import { users } from './users';
import { items } from './items';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
users: users,
items: items,
form: formReducer
});

export default rootReducer;

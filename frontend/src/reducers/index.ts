// reducers/index.ts
import { combineReducers } from 'redux';
import contactReducer from './contactReducer';
import starReducer from './starReducer';

const rootReducer = combineReducers({
  contacts: contactReducer,
  stars: starReducer,
});

export default rootReducer;
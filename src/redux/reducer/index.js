import { combineReducers } from 'redux';
import order from './order';
import page from './page';

export default combineReducers({
  order,
  page,
  foo: () => 'bar',
});

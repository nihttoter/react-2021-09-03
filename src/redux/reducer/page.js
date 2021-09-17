import { RESTAURANTS_PAGE, SET_PAGE } from '../constants';

export default function (state = RESTAURANTS_PAGE, action) {
  const { type, page } = action;
  switch (type) {
    case SET_PAGE:
      return page;
    default:
      return state;
  }
}

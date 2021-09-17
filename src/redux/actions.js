import { DECREMENT, INCREMENT, REMOVE, SET_PAGE } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });
export const setPage = (page) => ({ type: SET_PAGE, page }); // 'Restaurants' || 'Basket'

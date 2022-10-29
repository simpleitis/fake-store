import {
  SET_STORE_DATA,
  UPDATE_CATEGORY,
  UPDATE_PAGE_NUMBER,
} from './storeType';

const initalState = {
  storeData: [],
  pageNumber: 1,
  category: 'all',
};

const storeReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_STORE_DATA:
      return {
        ...state,
        storeData: action.payload.data,
      };
    case UPDATE_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.payload,
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
};

export default storeReducer;

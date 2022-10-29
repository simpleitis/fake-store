import { SET_STORE_DATA, UPDATE_CATEGORY } from './storeType';
import { UPDATE_PAGE_NUMBER } from './storeType';

export const storeData = (data) => {
  return {
    type: SET_STORE_DATA,
    payload: { data: data },
  };
};

export const updatePageNumber = (pageNumber) => {
  return {
    type: UPDATE_PAGE_NUMBER,
    payload: pageNumber,
  };
};

export const updateCategory = (category) => {
  return {
    type: UPDATE_CATEGORY,
    payload: category,
  };
};

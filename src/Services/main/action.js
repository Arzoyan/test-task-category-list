import { actionTypes } from "./reducer";

export const getCategoryList = (payload) => {
  return { type: actionTypes.GET_CATEGORY_LIST, payload };
};

export const getCategoryListSuccess = (payload) => {
  return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload };
};

export const getCategoryItemsList = (payload) => {
  return { type: actionTypes.GET_CATEGORIES_ITEM_LIST, payload };
};

export const getCategoryItemsListSuccess = (payload) => {
  return { type: actionTypes.GET_CATEGORIES_ITEM_SUCCESS, payload };
};

export const actionTypes = {
  GET_CATEGORY_LIST: "GET_CATEGORY_LIST",
  GET_CATEGORIES_SUCCESS: "GET_CATEGORIES_SUCCESS",

  GET_CATEGORIES_ITEM_LIST: "GET_CATEGORIES_ITEM_LIST",
  GET_CATEGORIES_ITEM_SUCCESS: "GET_CATEGORIES_ITEM_SUCCESS",

  REQ_FAILED: "REQ_FAILED",
};

const intState = {
  categoryList: null,
  paths: [],
  categoryItemList: null,
};

const mainStore = (state = intState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_CATEGORIES_SUCCESS: {
      return {
        ...state,
        categoryList: payload.result,
        paths: payload.paths,
      };
    }
    case actionTypes.GET_CATEGORIES_ITEM_SUCCESS: {
      return {
        ...state,
        categoryItemList: payload,
      };
    }
    case actionTypes.REQ_FAILED: {
      return {
        ...state,
        errorMessage: payload,
      };
    }
    default:
      return state;
  }
};

export default mainStore;

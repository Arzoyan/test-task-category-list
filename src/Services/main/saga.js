import { call, put, takeLatest } from "redux-saga/effects";
import * as homeAction from "./action";
import { actionTypes } from "./reducer";
import { GET_DATA } from "../../Api/GET_REQUEST";
import { CATEGORY } from "../../Api/constants";

function* getCategoryList({ payload }) {
  try {
    const result = yield call(GET_DATA, CATEGORY);
    let paths = result.map((item) => `/${item.name}`);
    yield put(homeAction.getCategoryListSuccess({ result, paths }));
  } catch (e) {
    yield put({ type: "REQ_FAILD", message: e.message });
  }
}

function* getCategoryItemList({ payload }) {
  const URL = `https://api.thecatapi.com/v1/images/search?limit=9&page=${payload.page}&category_ids=${payload.id}`;
  try {
    const result = yield call(GET_DATA, URL);
    yield put(homeAction.getCategoryItemsListSuccess(result));
  } catch (e) {
    yield put({ type: "REQ_FAILED", message: e.message });
  }
}

function* mainSaga() {
  yield takeLatest(actionTypes.GET_CATEGORY_LIST, getCategoryList);
  yield takeLatest(actionTypes.GET_CATEGORIES_ITEM_LIST, getCategoryItemList);
}

export default mainSaga;

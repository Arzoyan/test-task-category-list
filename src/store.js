import { createStore, applyMiddleware } from "redux";
import rootReducers from "./Services/root/rootReducers";
import rootSaga from "./Services/root/rootSaga";
import createSagaMiddleware from "redux-saga";
import "regenerator-runtime/runtime";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

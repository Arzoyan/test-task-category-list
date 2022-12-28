import { combineReducers } from "redux";

//---- import all reducers ---------------------------------
import mainStore from "../main/reducer";

// .. combating all reducers
const rootReducers = combineReducers({
  mainStore,
});

export default rootReducers;

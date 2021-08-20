import { createStore } from "redux";
import { Reducer } from "./reducers";

const configureStore = () => {
  return createStore(Reducer);
};
export default configureStore;

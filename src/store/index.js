import { createStore } from "redux";
import reducer from "./../reducers/city";

const initialState = {
    city: "Buenos Aires, ar"
};
export const store = createStore(reducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
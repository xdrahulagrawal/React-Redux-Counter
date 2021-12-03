import { createStore } from "redux";
import rootReducer from './services/reducer/index';
export const store = createStore(rootReducer);
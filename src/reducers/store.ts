import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { routerMiddleware as createRouterMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

import { rootReducer, RootState } from "./index";

export const history = createHistory();
export const routerMiddleware = createRouterMiddleware(history);

export function configureStore(initialState?: RootState) {
  // configure middlewares
  const middlewares = [routerMiddleware];
  // compose enhancers
  const enhancer = compose(applyMiddleware(...middlewares));
  // create store
  return createStore(rootReducer, initialState!, enhancer);
}

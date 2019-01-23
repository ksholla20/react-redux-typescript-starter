import { combineReducers } from "redux";
import { routerReducer as router, RouterState } from "react-router-redux";

import {
  calculatorReducer,
  State as CalculatorState
} from "./calculatorReducer";
import { CalculatorModel } from "../interfaces/calculatorModels";

interface StoreEnhancerState {}

export interface RootState extends StoreEnhancerState {
  router: RouterState;
  calculatorReducer: CalculatorState;
}
export const rootReducer = combineReducers<RootState>({
  router,
  calculatorReducer: calculatorReducer as any
});

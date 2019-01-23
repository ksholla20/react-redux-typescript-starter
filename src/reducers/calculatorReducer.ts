import { combineReducers } from "redux";
import { handleActions, Action } from "redux-actions";

import {
  CalculatorModel,
  OperandAPayload,
  OperandBPayload
} from "../interfaces/calculatorModels";
import * as CalculatorActions from "../actions/calculatorActions";

export type State = {
  readonly operandA: number;
  readonly operandB: number;
};

const initialState: State = {
  operandA: 0,
  operandB: 1
};

export const calculatorReducer = handleActions<State, CalculatorModel>(
  {
    [CalculatorActions.Type.SET_OPERANDA]: (
      state: State,
      action: Action<OperandAPayload>
    ) => {
      return {
        operandA: action.payload ? (action.payload as any) : 0,
        operandB: state.operandB
      };
    },
    [CalculatorActions.Type.SET_OPERANDB]: (
      state: State,
      action: Action<OperandBPayload>
    ) => {
      return {
        operandA: state.operandA,
        operandB: action.payload ? (action.payload as any) : 0
      };
    }
  },
  initialState
);

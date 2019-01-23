import { createAction } from "redux-actions";
import { OperandAPayload, OperandBPayload } from "../interfaces/calculatorModels";

export const Type = {
  SET_OPERANDA: "SET_OPERANDA",
  SET_OPERANDB: "SET_OPERANDB"
};

export const setOperandA = createAction<OperandAPayload>(
  Type.SET_OPERANDA
);

export const setOperandB = createAction<OperandBPayload>(
  Type.SET_OPERANDB
);

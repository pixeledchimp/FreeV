import { createStore, combineReducers } from "redux"
import CvStateReducer from "./reducers/CvStateReducer"
import { ICvType } from "./types/CvType"

export interface IGlobalState {
    cvState: ICvType
}
const globalReducer = combineReducers({cvState: CvStateReducer})
export const getTheStore  = () => createStore(globalReducer, {})
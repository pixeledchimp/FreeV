import { ICvType } from "../types/CvType";
import { ISetCvStateAction } from "../actions/SetCvStateAction";

export default (state: ICvType = {}, action: ISetCvStateAction) => {
    switch(action.type){
        case 'SET_STATE':
            return action.cvData

            default:
                return state
    }
}
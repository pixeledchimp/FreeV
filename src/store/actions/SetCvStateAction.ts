import {Action, ActionCreator} from 'redux'
import { ICvType } from '../types/CvType'

export interface ISetCvStateAction extends Action<'SET_STATE'>{
    cvData: ICvType
}

export const setSTateActionCreator: ActionCreator<ISetCvStateAction> = (state: ICvType) => {
    return {
        type: 'SET_STATE',
        cvData: state
    }
}
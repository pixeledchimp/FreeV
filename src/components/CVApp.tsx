import { ICvType } from "../store/types/CvType"
import React from "react"
interface IAppType{
    state?: ICvType
  }
const cv: React.FC<IAppType> = ({state})=> {
    return <div>
        { state?.JobRelatedInfo }
    </div>
}

export default cv
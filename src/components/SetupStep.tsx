import React from 'react'
import { Dispatch } from 'redux'
import {connect} from 'react-redux'
import { ICvType } from '../store/types/CvType'
import { setSTateActionCreator, ISetCvStateAction } from '../store/actions/SetCvStateAction'
import { IGlobalState } from '../store/store'

interface ISetpState{
    state?:ICvType
    addState: (st:ICvType) => void
}

const setupStep: React.FC<ISetpState> = ({state, addState}) => {

    const fileDropped = (e: React.DragEvent<HTMLDivElement>) => {
        const file = e.dataTransfer.files[0]
        const reader = new FileReader();
        let content;
        reader.readAsBinaryString(file)
        reader.onloadend = () => {
            try {
                content = JSON.parse(reader.result as string) as ICvType
                addState(content)
            } catch (error) {
                alert("Wrong format");
            }
        }
        e.preventDefault()
        dropbox.classList.remove('dragging')
    }

    const dragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        dropbox.classList.add('dragging')
    }

    let dropbox: HTMLDivElement
    return <div className="setup-step">
    <div className="drop-setup-json" onDrop={fileDropped} onDragLeave={() => dropbox.classList.remove('dragging') } onDragOver={(e) => {dragOver(e)}} ref={(e:HTMLDivElement) => dropbox = e}>
        <div className="target-area">
            <h1>Drop your json file here</h1>
        </div>
    </div>
</div>
}
const mapStateToProps = (state:IGlobalState) => state.cvState
const mapDispatchToProps = (dispatch:Dispatch<ISetCvStateAction>) => ({
    addState: (state: ICvType) => dispatch(setSTateActionCreator(state))
})
export default connect(mapStateToProps, mapDispatchToProps)(setupStep)
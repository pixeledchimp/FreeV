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
        <h1>Free V.</h1>
        <p>Free V is a simple client-side react app thought to help people build their CV very quickly and for <b>FREE</b>. </p>
        <p>My motivation is that when being unemployed and/or needing, or wishing, to get a new job, the last thing you need is to waste time trying to look for a cheap alternative to build your CV fast and decently. Well, I thought, free beats cheap. Besides, there are a bunch of those who chage you like half a dollar for the CV (ok for me), but then charge you with a $25+ fee without even asking, and that's very un pleasant. So, here it is what I've come up until now and I hope it is good for someone. Good luck!</p>
        <ol>
            <li>Download the <a href='data:text/plain;charset=utf-8,{"QuickInfo":[{"Title":"Brief","IsVisible":true,"Content":{"Name":"Mister X","LastName":"Y Z","Picture":"https:\/\/image.flaticon.com\/icons\/png\/512\/56\/56745.png","Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel enim iaculis sapien interdum porttitor. Suspendisse non turpis quam. Sed at placerat mauris.\u2551Aenean sit amet justo tortor. Praesent sit amet lacinia lorem, quis scelerisque turpis. Ut odio ligula, viverra id posuere id, tempor ac dui. Pellentesque in lorem ullamcorper, facilisis nunc vitae, varius odio.\u2551Phasellus nulla est, consequat sed felis sit amet, mollis pulvinar est. Aliquam eu orci in quam sollicitudin bibendum. Cras lacinia posuere convallis."}},{"Title":"Personal Information","IsVisible":true,"Content":{"BirthDate":"1980-01-01","Nationality":"EE UU","Email":"my@email.ok","Telephone":"+34 00 55 55 55","Status":"Single","Kids":0,"Gender":"male"}},{"Title":"Languages","IsVisible":true,"Content":[{"Name":"Spanish","Level":5,"Native":true},{"Name":"English","Level":4,"Native":false}]},{"Title":"Interests","IsVisible":true,"Content":[{"Name":"Programming","Description":"Because it is fun."},{"Name":"API development","Description":"Because it is fun."},{"Name":"GUI development","Description":"Because it is fun."},{"Name":"React","Description":"Because it is fun."},{"Name":"Typescript","Description":"Because it is fun."}]}],"JobRelatedInfo":[{"Title":"Jobs","IsVisible":true,"Content":[{"EntityName":"Good Job Inc. \/ Barcelona","StartDate":"July 2005","EndDate":"In progress","Role":"Manager of XYZ","Description":"I started"}]},{"Title":"Studies","IsVisible":true,"Content":[{"EntityName":"University of XYZ","StartDate":"January 2000","EndDate":"June 2005","Role":"Degree on XYZ","Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel enim iaculis sapien interdum porttitor. Suspendisse non turpis quam. Sed at placerat mauris.\u2551Aenean sit amet justo tortor. Praesent sit amet lacinia lorem, quis scelerisque turpis. Ut odio ligula, viverra id posuere id, tempor ac dui. Pellentesque in lorem ullamcorper, facilisis nunc vitae, varius odio. Phasellus nulla est, consequat sed felis sit amet, mollis pulvinar est. Aliquam eu orci in quam sollicitudin bibendum. Cras lacinia posuere convallis."}]},{"Title":"Skills","IsVisible":true,"Content":[{"Name":"Java","Level":4,"certificationUrl":"https:\/\/your.cert.url","certificationContent":"Title of the certification"},{"Name":"Javascript","Level":3},{"Name":"CSS","Level":3},{"Name":"SCSS","Level":3}]}]}' download="cv-template.json">JSON template file</a></li>
            <li>Put your data in the json file</li>
            <li>Drop the JSON file in the area</li>
            <li>Print the page as PDF</li>
        </ol>
        <p>This is react app running fully on the browser. No data is going to the server which means that whatever file you drop in the area will remain on your computer. No info is shared or traveling through the internet.Unless your browser of choice is spying on you >_> </p>
        <p>I almost forgot. When you are editing the json use three pipes to separate the text un paragraphs, like this <b>|||</b>. You can use a site such as </p>
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
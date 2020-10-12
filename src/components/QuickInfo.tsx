import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React from "react"
import { ISection, IBrief, IPersonalInfo, ILanguageSkill, IInterest } from '../store/types/CvType'
import { s2p } from './CVApp'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

interface IQuickInfo{
    sections: ISection[]
}

export const QuickInfo: React.FC<IQuickInfo> = ({sections}) => <div className="quickInfo">
    {sections.map( (s,key) => {
        if(s.IsVisible &&  typeof (s.Content as any).Picture !== "undefined"){
            const content = s.Content as IBrief
            return <div className="brief" key={key}>
                <div className="pic" css={css`
                    background: url(${content.Picture});
                    background-position: center;
                    background-size: cover;
                    height: 200px;
                    width: 200px;
                    margin: auto;
                    margin-bottom: 1rem;
                `}></div>
                <h3>{content.Name} {content.LastName}</h3>
                <div className="description">
                    {s2p(content.Description)}
                </div>
            </div>
        }
        else if(s.IsVisible && (s.Content as any).Email){
            const content = s.Content as IPersonalInfo
            return <div className="personal-info" key={key}>
                <h3>{s.Title}</h3>
                <div className="personal-data">
                    <ul>
                        <li><b>Birth date:</b> <span>{content.BirthDate}</span></li>
                        <li><b>Gender:</b> <span>{content.Gender}</span></li>
                        <li><b>Status:</b> <span>{content.Status}</span></li>
                        <li><b>With Kids:</b> <span>{content.Kids}</span></li>
                        <li><b>Nationality:</b> <span>{content.Nationality}</span></li>
                        <li><b>Email:</b> <span>{content.Email}</span></li>
                        <li><b>Telephone:</b> {content.Telephone}</li>
                    </ul>
                </div>
            </div>
        }
        else if(s.IsVisible && typeof (s.Content as any)[0].Level !== "undefined"){
            const contents = s.Content as ILanguageSkill[]
            return <div className="language-skills" key={key}>
                <h3>{s.Title}</h3>
                <ul>
                    {contents.map( (l,k) => <li key={k}>
                        <ul>
                            <li key={k+1}><b>{l.Name}</b></li>
                            <li key={k+2}>{[...(new Array(l.Level)).keys()].map( (_,ky) => <span key={ky}>
                                <FontAwesomeIcon icon={faStar}/>
                                </span> )}</li>
                            <li key={k+3}>{l.Native ? "Native speaker" : ""}</li>
                        </ul>
                    </li>)}
                </ul>
            </div>
        }
        else if(s.IsVisible && typeof (s.Content as any)[0].Name !== "undefined"){
            const contents = s.Content as IInterest[]
            return <div className="interests" key={key}>
                <h3>{s.Title}</h3>
                <ul>
                    {contents.map( (l,k) => <li key={k}>
                        <ul>
                            <li key={k+1}><b>{l.Name}</b></li>
                            <li key={k+3}>{l.Description}</li>
                        </ul>
                    </li>)}
                </ul>
            </div>
        }
        else return ""
    })}
</div>   
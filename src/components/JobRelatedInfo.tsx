import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faBookmark, faBriefcase, faCheck } from '@fortawesome/free-solid-svg-icons'
import { IExperience, ISection, IQuickExperience } from '../store/types/CvType'
import { s2p } from './CVApp'

interface IJobRelatedInfo{
    sections: ISection[]
}

export const JobRelatedInfo: React.FC<IJobRelatedInfo> = ({sections}) => <div className="JobRelatedInfo">
{
    sections.map((s,key1) => {
        if(s.IsVisible && typeof s.Content === 'string'){
            return <div className="brief" key={key1}>
                <h3><span className="icon"><FontAwesomeIcon icon={faBookmark}/></span>{s.Title}</h3>
                <div className="description">
                    {s.Content}
                </div>
            </div>
        }
        else if(s.IsVisible && typeof (s.Content as any)[0].EntityName !== 'undefined'){
            const entities = s.Content as IExperience[]
            return <div className="experience" key={key1}>
                <h3><span className="icon"><FontAwesomeIcon icon={faBriefcase}/></span>{s.Title}</h3>
                {entities.map( (e,k) => <div className="entity" key={k}>
                    <ul>
                        <li><h3 dangerouslySetInnerHTML={{ __html: e.EntityName }}></h3></li>
                        <li><b>Start date:</b> {e.StartDate}</li>
                        <li><b>Start date:</b> {e.EndDate}</li>
                        <li><b>{e.Role}</b></li>
                        <li>{s2p(e.Description)}</li>
                    </ul>
                </div> )}
            </div>
        }
        else if(s.IsVisible && typeof (s.Content as any)[0].Level !== 'undefined'){
            const entities = s.Content as IQuickExperience[]
            return <div className="quick-skills" key={key1}>
                <h3><span className="icon"><FontAwesomeIcon icon={faCheck}/></span>{s.Title}</h3>
                <div>
                    {entities.map( (e,k) => <div className="skill" key={k}>
                        <ul>
                            <li><b>{e.Name}</b> {[...(new Array(e.Level)).keys()].map( (_,ky) => <span key={ky}>
                                    <FontAwesomeIcon icon={faStar}/>
                                    </span> )}</li>
                            {e.certificationUrl && <li><b>&nbsp;</b><span><a href={e.certificationUrl}>{e.certificationContent}</a></span></li>}
                        </ul>
                    </div> )}
                </div>
            </div>
        }
        else return ""
    })
}
</div>
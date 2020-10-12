import React from 'react';
import './../index.scss';
import { QuickInfo } from './QuickInfo';
import { JobRelatedInfo } from './JobRelatedInfo';
import { ICvType, ISection } from '../store/types/CvType';

export function s2p(text:string): JSX.Element {
  const lineSeparator = "|||"
  const parts = text.split(lineSeparator);
  return <div>
    {parts.map(  (part, k) => <p key={k}>{part}</p>)}
  </div>
}

export default (props:ICvType) => {
  return (
    <div className="CVApp">
      <table>
        <tbody>
        <tr>
          <td>
          <QuickInfo sections={props.QuickInfo as ISection[]}/>
          </td>
          <td><JobRelatedInfo sections={props.JobRelatedInfo as ISection[]}/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

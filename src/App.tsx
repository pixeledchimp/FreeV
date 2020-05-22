import React from 'react'
import SetupStep from './components/SetupStep'
import { connect } from 'react-redux';
import { ICvType } from './store/types/CvType';
import CVApp from './components/CVApp'
import { IGlobalState } from './store/store';

interface IAppType{
  cvState?: ICvType
}
const App:React.FC<IAppType> = ({cvState}) => {
  
  const isValidState = (s?:ICvType) =>{
    return s?.JobRelatedInfo
  }

if(isValidState(cvState)){
  return <CVApp {...cvState}/>
}
  return (
    <div className="App">
      <SetupStep/>
    </div>
  );
}

const mapStateToProps = (state:IGlobalState) => {
  return state
}

export default connect(mapStateToProps, null)(App)

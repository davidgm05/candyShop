import React, { useEffect } from 'react';
import './App.css';
import Scene3DBall from './components/scene3D';
import { PrincipalSection } from './components/principalSection';
import { SecondSection } from './components/secondComponent';


function App() {
  
  
  
    return ( 
      <>
      <div className='principal-section'>
        <PrincipalSection />
        <Scene3DBall/>
      </div>
      <div>
        <SecondSection />
      </div>
     
      </>
  
    )
  }
  
  export default App


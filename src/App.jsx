import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Scene3DBall from './components/scene3D';
import { PrincipalSection } from './components/principalSection';
import { SecondSection } from './components/secondComponent';
import { RegisterPage } from './routes/RegisterPage';
import { LoginPage } from './routes/LoginPage';
import { HeaderComponent } from './components/HeaderComponent';


function App() {
  const [userData, setUserData] = useState(null)
  
    return ( 
      <>
          <BrowserRouter>
          <HeaderComponent userData={userData}/>
      <div>
        <div>
          <Routes>
          <Route path="/" element={
                        <>
                            <div className='principal-section'>
                                <PrincipalSection />
                                <div className='container-scene-3d'>
                                <Scene3DBall />
                                </div>
                            </div>
                            <SecondSection />
                        </>
                    } />
            
            <Route path='/register' element={<RegisterPage/>}></Route>
            <Route path='/login' element={<LoginPage setUserData={setUserData}/>}></Route>
          </Routes>
        </div>
      </div>
      
          </BrowserRouter>
     
      </>
  
    )
  }
  
  export default App


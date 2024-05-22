import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Scene3DBall from './components/scene3D';
import { PrincipalSection } from './components/principalSection';
import { SecondSection } from './components/secondComponent';
import { RegisterPage } from './routes/RegisterPage';
import { LoginPage } from './routes/LoginPage';
import { HeaderComponent } from './components/HeaderComponent';


function App() {
  
  
  
    return ( 
      <>
          <BrowserRouter>
          <HeaderComponent/>
      <div>
        <div>
          <Routes>
          <Route path="/" element={
                        <>
                            <div className='principal-section'>
                                <PrincipalSection />
                                <Scene3DBall />
                            </div>
                            <SecondSection />
                        </>
                    } />
            <Route path='/register' element={<RegisterPage/>}></Route>
            <Route path='/login' element={<LoginPage/>}></Route>
          </Routes>
        </div>
      </div>
      
          </BrowserRouter>
     
      </>
  
    )
  }
  
  export default App


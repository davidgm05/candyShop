import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Scene3DBall from './components/scene3D';
import { PrincipalSection } from './components/principalSection';
import { SecondSection } from './components/secondComponent';
import { LoginPage } from './routes/LoginPage';


function App() {
  
  
  
    return ( 
      <>
          <BrowserRouter>
      <div>
        <div>
          <h2>hola</h2>
           <Link to={"/login"}>
          <button>registrarse</button>
          </Link>
          <Routes>
            <Route path='/login' element={<LoginPage/>}></Route>
          </Routes>
        </div>
      </div>
      <div className='principal-section'>
        <PrincipalSection />
        <Scene3DBall/>
      </div>
      <div>
        <SecondSection />
      </div>
          </BrowserRouter>
     
      </>
  
    )
  }
  
  export default App


import React from 'react'
import { Link } from 'react-router-dom'

export const HeaderComponent = ({userData}) => {
  
  return (
    <>
    
    <div className='header-bar'>
          <Link to={"/"}>
                <button>Pagina principal</button>
            </Link>
            <div className='name-user'>
              <h1>{userData?.nombre}</h1>
            </div>
            <div className='register-button'>
            <Link to={"/register"}>
                <button>Register</button>
            </Link>
            <Link to={"/login"}>
                <button>Login</button>
            </Link>
          </div>
          </div>
    </>
  )
}

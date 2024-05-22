import React from 'react'
import { Link } from 'react-router-dom'

export const HeaderComponent = () => {
  return (
    <>
    
    <div className='header-bar'>
          <Link to={"/"}>
                <button>pagina principal</button>
            </Link>
            <div className='name-user'>
            </div>
            <div className='register-button'>
            <Link to={"/register"}>
                <button>register</button>
            </Link>
            <Link to={"/login"}>
                <button>login</button>
            </Link>
          </div>
          </div>
    </>
  )
}

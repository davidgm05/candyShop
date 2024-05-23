import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { EdicionesLimitadas } from '../routes/edicionesLimitadas';
import { NuestrasColaboraciones } from '../routes/nuestrasColaboraciones';
import { GoloasinasImportadas } from '../routes/goloasinasImportadas';

export const SecondSection = () => {
  return (
    <>
    <Routes>
      <Route path='/golosinasimportadas' element={<GoloasinasImportadas/>}></Route>
      <Route path='/edicioneslimitadas' element={<EdicionesLimitadas/>}></Route>
      <Route path='/nuestrascolaboraciones' element={<NuestrasColaboraciones/>}></Route>
    </Routes>
    <div className='second-section'>
      <Link to={"/golosinasimportadas"}>
        <div className='golosinas-importadas'></div>
      </Link>
        <Link to={"/edicioneslimitadas"}>
        <div className='ediciones-limitadas'></div>
      </Link>
        <Link to={"/nuestrascolaboraciones"}>
        <div className='nuestras-colaboraciones'></div>
      </Link>
    </div>
    </>
  )
}
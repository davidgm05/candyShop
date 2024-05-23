import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { EdicionesLimitadas } from '../routes/edicionesLimitadas';
import { NuestrasColaboraciones } from '../routes/nuestrasColaboraciones';
import { GolosinasImportadas } from '../routes/golosinasImportadas';

export const SecondSection = () => {
  return (
    <>
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
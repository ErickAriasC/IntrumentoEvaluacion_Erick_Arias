import React from 'react'
import { NavLink } from 'react-router-dom'

export const Welcome = ({ ficha }) => {
  return (
    <>
      <h1>instrumento de evaluación</h1>
      <h2>Ficha: {ficha} </h2>
      <NavLink to='/Finances'>Ingresar</NavLink>
    </>
  )
}

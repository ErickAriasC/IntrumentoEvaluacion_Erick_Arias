import React, { useState } from 'react'
import { ListFinances } from '../ListFinances/ListFinances'


export const Finances = () => {

  const handleBills = () => {
    
  }

  return (
    <div>
      <h1>Mis finanzas</h1>
      <form action="">        
        <input type="text" placeholder='¿En qué gastaste?' />
        <span>$ <input type="number" placeholder='¿Cuánto gastaste?' /></span>
      </form>      
      <button className='btnAdd' onClick={handleBills}>Agregar Gasto</button>
      <ul>
        
      </ul>
    </div>
  )
}

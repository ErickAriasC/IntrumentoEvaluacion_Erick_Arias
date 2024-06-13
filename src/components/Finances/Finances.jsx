import React, { useState } from 'react'
import { ListFinances } from '../ListFinances/ListFinances'
import { NavLink } from 'react-router-dom'




export const Finances = () => {

  const [product, setProduct] = useState('')
  const [valueProduct, setvalueProduct] = useState(0)
  const [expensesList, setexpensesList] = useState([])


  const handleBills = () => {

    
    let productBill='Producto: '+product+' '+ 'Valor: '+valueProduct;
    console.log(productBill)

    //Agregar producto al EXPENSESLIST

    setexpensesList(productBill.push())

  }

  return (
    <div>
      <h1>Mis finanzas</h1>
      <form action="">        
        <input value={product} type="text" placeholder='¿En qué gastaste?' onChange={(event)=>setProduct(event.target.value)} />
        <span>$ <input value={valueProduct} type="number" placeholder='¿Cuánto gastaste?' onChange={(event)=>setvalueProduct(event.target.value)}/></span>
      </form>      
      <button className='btnAdd' onClick={handleBills}>Agregar Gasto</button>
      <NavLink to='/Welcome'>Regresar</NavLink>

      <ul>
        
      </ul>
    </div>
  )
}

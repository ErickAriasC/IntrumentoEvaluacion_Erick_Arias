import { Routes, Route } from 'react-router-dom'
import { Finances } from './components/Finances/Finances'
import { Welcome } from './components/Welcome/Welcome'
import './App.css'

function App() {
  
  return (
    <>
      
      <Routes>
        <Route path='/Welcome' element={<Welcome/>} />   
        <Route path='/Finances' element={<Finances /> } />
      </Routes>
    </>
  )
}

export default App

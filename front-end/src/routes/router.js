import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Home from '../pages/Home'


const Rotas = () =>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/> }/>
    </Routes>
  </BrowserRouter>
  )

}

export default Rotas;
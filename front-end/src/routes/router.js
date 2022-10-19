import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Home from '../pages/Home'
import Gostos from '../pages/Gostos'


const Rotas = () =>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/login' element={ <Login/> }/>
      <Route path='SeusGostos' element={ <Gostos/> }/>
    </Routes>
  </BrowserRouter>
  )

}

export default Rotas;
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Home from '../pages/Home'
import Explorar from '../pages/explorar'




const Rotas = () =>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/login' element={ <Login/> }/>
      <Route path='/explorar' element={ <Explorar />} />
      
    </Routes>
  </BrowserRouter>
  )

}

export default Rotas;
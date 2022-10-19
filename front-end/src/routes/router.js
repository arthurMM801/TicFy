import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Home from '../pages/Home'
import Explorar from '../pages/Explorar'
import Player from '../pages/Player'



const Rotas = () =>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={ <Home/> }/>
      <Route path='/login' element={ <Login/> }/>
      <Route path='/explorar' element={ <Explorar />} />
      <Route path='/' element={ <Player />} />
    </Routes>
  </BrowserRouter>
  )

}

export default Rotas;
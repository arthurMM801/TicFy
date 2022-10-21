import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Home from '../pages/Home'
import Gostos from '../pages/Gostos'
import Explorar from '../pages/Explorar'
import Player from '../pages/Player'




const Rotas = () =>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/login' element={ <Login/> }/>

      <Route path='/seusGostos' element={ <Gostos/> }/>

      <Route path='/explorar' element={ <Explorar />} />
      <Route path='/player' element={ <Player />} />
    </Routes>
  </BrowserRouter>
  )

}

export default Rotas;
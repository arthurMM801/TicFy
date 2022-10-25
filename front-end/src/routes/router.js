import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Home from '../pages/Home'
import Gostos from '../pages/Gostos'
import Explorar from '../pages/Explorar'
import Player from '../pages/Player'
import Cadastro from '../pages/Cadastro'
import Perfil from '../pages/Perfil'
import Configs from '../pages/Configs'


const Rotas = () =>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/> }/>
      
      <Route path='/login' element={ <Login/> }/>
      <Route path='/cadastro' element={ <Cadastro/> }/>
      <Route path='/seusgostos' element={ <Gostos/> }/>

      <Route path='/explorar' element={ <Explorar />} />
      <Route path='/player' element={ <Player />} />
      <Route path='/perfil' element={ <Perfil />} />
      <Route path='/configs' element={ <Configs />} />



    </Routes>
  </BrowserRouter>
  )

}

export default Rotas;
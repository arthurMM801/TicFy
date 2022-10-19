import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Home from '../pages/Home'
import Gostos from '../pages/Gostos'
import Explorar from '../pages/Explorar'
import Player from '../pages/Player'

//>>>>>>> fc0d42027bc94592effe1852591c993f18a465a5

// ARTHUR O QUE É ISSO, se queser comentar usa o //


const Rotas = () =>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={ <Home/> }/>
      <Route path='/login' element={ <Login/> }/>

      <Route path='SeusGostos' element={ <Gostos/> }/>

      <Route path='/explorar' element={ <Explorar />} />
      <Route path='/' element={ <Player />} />
      {/* fc0d42027bc94592effe1852591c993f18a465a5 */}
    </Routes>
  </BrowserRouter>
  )

}

export default Rotas;
import './card.css'
import { useState } from 'react'
import Envolver from '../../assets/envolver.png'



function Card(){

  const [nome, setNome] = useState("")

    return (
        <div className="card">
            <img src={Envolver} className="card__image" ></img>
            <label className="card__titulo" >Envolver</label>
            <label className="card__descricao">Single by anita - 2021</label>
        </div>
    )
}

export default Card;
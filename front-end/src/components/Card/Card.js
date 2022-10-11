import './card.css'
import { useState } from 'react'



function Card(props){

  const [nome, setNome] = useState("")

    return (
        <div className="card">
            <img src="envolver.png" className="card__image" ></img>
            <label className="card__titulo" ></label>
            <label className="card__descricao">Single by anita - 2021</label>
        </div>
    )
}

export default Card;
import './card.css'



function Card({nome, descricao}){

    return (
        <div className="card">
            <img src="envolver.png" className="card__image" ></img>
            <label className={nome} >Envolver</label>
            <label className="card__descricao">Single by anita - 2021</label>
        </div>
    )
}

export default Card;
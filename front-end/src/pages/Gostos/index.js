import React from "react"
import './gostos.css'


const Gostos =()=>{
    const imagens = [
    {
        id:1,
        descricao: 'Indie',
        img: 'https://reviewzeiro.files.wordpress.com/2014/07/arctic-monkeys-am-cover.jpg?w=317&h=317'
    }]


    return(

        <div className="Container-Gostos">
            <h1>Escolha seus gêneros musicais preferidos</h1>

            <button className="arrow-left">
                <svg xmlns="http://www.w3.org/2000/svg"
                 width="24" 
                 height="24" 
                 viewBox="0 0 24 24">
                    <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/>
                </svg>
                </button>

                <button className="arrow-right">
                <svg xmlns="http://www.w3.org/2000/svg"
                 width="24" 
                 height="24" 
                 viewBox="0 0 24 24">
                    <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/>
                </svg>
                </button>

            <div className="items-wrapper">

               <div className="gallery">
                    {
                        imagens.map(img => {
                            return(
                                <div key={img.id} className='item'>
                                    <img src={img.img} alt = {img.descricao}/>
                                    <h2>{img.descricao}</h2>
                                </div>
                            )
                        })
                    }
               </div>
            </div>

            <button
               className="btn btn-primary"
               id="btn-gostos">Confirmar
            </button>
        </div>
    )
}

export default Gostos;
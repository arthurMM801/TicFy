import { useRef, useState } from "react"
import './gostos.css'
import { Link } from "react-router-dom"


const Gostos =()=>{
    const imagens = [
    {
        id:1,
        descricao: 'Indie',
        img: 'https://reviewzeiro.files.wordpress.com/2014/07/arctic-monkeys-am-cover.jpg?w=317&h=317'
    },
    {
        id:2,
        descricao:"Rock",
        img:"https://static.preparaenem.com/2021/06/rock-and-roll.jpg?w=200"
    },
    {
        id:3,
        descricao:"Funk",
        img:"https://cdns-images.dzcdn.net/images/artist/147fa03566c6fff84fb84b088f17dc6a/264x264.jpg?w=200"
    },
    {
        id:4,
        descricao:"Pagode",
        img:"https://www.blogodorium.com.br/wp-content/uploads/pagode.jpg"
    },
    {
        id:5,
        descricao:"Pop",
        img:"https://img.freepik.com/vetores-premium/letras-de-vetor-3d-vintage-de-musica-pop-tipo-de-fonte-em-negrito-retro-texto-estilizado-de-arte-pop-letras-de-estilo-antigo-numeros-simbolos-pacote-de-elementos-banner-de-poster-dos-anos-90-80-fundo-de-cor-de-pinho_106317-21305.jpg?w=200"
    },
    {
        id:6,
        descricao:"Rap",
        img:"https://img.freepik.com/vetores-gratis/palavra-de-neon-de-rap-e-microfone-no-contorno-de-chama_1262-11901.jpg?w=200"
    },
    {
        id:7,
        descricao:"Clásica",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-165Hu8QNYxwnFyFGFu471iDELzga8pwKfw&usqp=CAU?w=200"
    },
]

    const [btnSelect, setbtnSelect] = useState(false)



const carrocel = useRef(null)
const item = useRef(null)

const handleLeftClick =(e)=>{
    e.preventDefault()
    carrocel.current.scrollLeft -= carrocel.current.offsetWidth

}
const handleRightClick =(e)=>{
    e.preventDefault()
    carrocel.current.scrollLeft += carrocel.current.offsetWidth
}

const handleCLickItem =(e)=>{
    e.preventDefault();
    setbtnSelect(btnSelect => !btnSelect)
}
let addClass = btnSelect ? ' active' : ''

    return(
        <div className="Container-Gostos">
            <h1>Selecione seus gostos musicais preferidos</h1>

            <div className="carrocel-wrapper" ref={carrocel}>


            <button 
            className={`arrow-left`}
            onClick={handleLeftClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg"
                 width="65" 
                 height="65" 
                 viewBox="0 0 24 24">
                    <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/>
                </svg>
                </button>

                <button 
                className={`arrow-right`}
                onClick={handleRightClick}
                >
                <svg xmlns="http://www.w3.org/2000/svg"
                 width="65" 
                 height="65" 
                 viewBox="0 0 24 24">
                    <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/>
                </svg>
                </button>


               <div className="gallery">
                    {
                        imagens.map(img => {
                            return(
                                <div 
                                key={img.id} 
                                className={`item item${img.id}`}
                                ref={item}
                                >
                                    <img 
                                    src={img.img} 
                                    alt = {img.descricao}
                                    />
                                    <h2>{img.descricao}</h2>
                                    
                                </div>
                            )
                        })
                    }
               </div>
            </div>

            <Link
               className="btn btn-primary"
               id="btn-gostos" to={'/'}>Confirmar
            </Link>
        </div>
    )
}

export default Gostos;
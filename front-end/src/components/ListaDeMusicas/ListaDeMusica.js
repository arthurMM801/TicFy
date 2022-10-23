import './listaDeMusica.css'
import 'bootstrap';

import Card from '../Card/Card'

function ListaDeMusica() {

    return (
        <div className="lista__musicas" >
            <span className="tituloDaLista">Tendências</span>
             <ul className="list-group-horizontal">
                <li className="item__musica">
                    <Card />
                </li>
                <li className="item__musica">
                    <Card />
                </li>
                <li className="item__musica">
                    <Card />
                </li>
                <li className="item__musica">
                    <Card />
                </li>
                <li className="item__musica">
                    <Card />
                </li>
                <li className="item__musica">
                    <Card />
                </li>
                <li className="item__musica">
                    <Card />
                </li>
                <li className="item__musica">
                    <Card />
                </li>
                <li className="item__musica">
                    <Card />
                </li>
                
            </ul >
        </div>
    );
}



export default ListaDeMusica;
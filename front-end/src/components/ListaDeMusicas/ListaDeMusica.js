import './listaDeMusica.css'
import 'bootstrap';

import Card from '../Card/Card'

function ListaDeMusica() {

    return (
        <div className="lista__musicas" >
            <span className="tituloDaLista">Tendências</span>
             <ul className="list-group-horizontal">
               
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li><li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
            </ul >
        </div>
    );
}



export default ListaDeMusica;
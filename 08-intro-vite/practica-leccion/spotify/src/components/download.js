import { descargacompleto } from "../barrels/assets"

const Download = () =>{

    return /*html */`
        <aside>
            <img src="${descargacompleto}" alt="" srcset="" id="descargar-img" />
            <h3 id="descargar-titulo">Descarga Spotify para Windows</h3>
            <p id="descargar-p">Disfruta de audio de alta calidad, reproducción
                en modo offline y un feed de amigos dinámico
                para estar al día con 10 que les gusta a tus
                personas favoritas.</p>
            <button id="descargar-btn">Descargar la aplicación gratuita</button>
        </aside>
    ` 

}

export default Download
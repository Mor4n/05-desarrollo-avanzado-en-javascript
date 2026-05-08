
import Card from "./card"

const ContentSection = (titulo, subtitulo, datos) => {  
    return /* html */`
        <section class="contenido-seccion">
            <div class="contenido-intro">
                <h2 class="contenido-titulo">${titulo}</h2>
                <h3 class="contenido-subtitulo">${subtitulo}</h3>
                <p class="contenido-mostrar"><span>Mostrar todo</span></p>
            </div>

            <div class="playlists-container">
                ${datos.map( elemento =>{
                     return Card(elemento.imgUrl,elemento.titulo)
                }).join('')}
                
            </div>


        </section>

    `


  }
            

export default ContentSection
import { cancionesImpactan, forge, kindie, meRecuerdaA, queMeRecuerda, sime, tresTresTres, workout,
descubrimiento, mixDiario1, mixDiario2, mixDiario3, mixDiario4,} from "../barrels/assets";
import { contentMadeFor, contentMiniPlaylist, contentMusic } from "../barrels/data";
import ContentSection from "./common/content-section";
import Filterbutton from "./common/filter-button";
import MiniPlaylist from "./common/miniplaylist";



const Content = () =>{

    return /* html */`
        <section id="content">

            <div class="botones-filtro-container">
                ${Filterbutton("Todo")}
                ${Filterbutton("Música")}
                ${Filterbutton("Podcasts")}
            </div>
            
            <div id="miniplaylist-container">
                
                ${contentMiniPlaylist.map( elemento =>{
                    const { imgUrl,titulo } = elemento;
                        return MiniPlaylist(imgUrl,titulo)
                })}
            
            </div>

            ${ContentSection("Hecho para","Morán",contentMadeFor)}
            
            ${ContentSection("Música sin interrupciones basada en tus canciones y tus artistas favoritos","Estaciones recomendadas", contentMusic)}

        </section>

    `
}

export default Content;
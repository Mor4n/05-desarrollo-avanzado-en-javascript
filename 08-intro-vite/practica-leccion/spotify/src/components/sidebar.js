import { aimer, cancionesImpactan, forge, kindie, megusta, meRecuerdaA, queMeRecuerda, sime, tresTresTres, workout } from "../barrels/assets";
import { contentSidebar } from "../barrels/data";
import FilterButton from "./common/filter-button";
import Sidecard from "./common/sidecard";



const Sidebar = () =>{

    return /* html */`
    
    <section id="biblioteca">
        <h2>Tu biblioteca</h1>

        <div class="botones-filtro-container">
            ${FilterButton("Playlists")}
            ${FilterButton("Artistas")}
            ${FilterButton("Álbumes")}
            ${FilterButton("Podcasts")}
        </div>

          ${contentSidebar.map( elemento =>{
                const {imgUrl, nombre, anclado,tipo,autor} = elemento;
                return Sidecard(imgUrl,nombre,anclado,tipo,autor)

            }).join("")}



    </section>



    `
}

export default Sidebar;
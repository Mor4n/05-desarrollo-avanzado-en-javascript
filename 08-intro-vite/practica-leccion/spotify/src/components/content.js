import { cancionesImpactan, forge, kindie, meRecuerdaA, queMeRecuerda, sime, tresTresTres, workout } from "../barrels/assets";
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
                ${MiniPlaylist(workout,"Workout")}
                ${MiniPlaylist(cancionesImpactan,"Canciones que me impactan")}
                ${MiniPlaylist(queMeRecuerda,'//"Que me recuerda a alguien"//')}
                ${MiniPlaylist(tresTresTres,"3:33 a.m")}
                ${MiniPlaylist(meRecuerdaA,"Me recuerda a")}
                ${MiniPlaylist(forge,"Forge Mx9")}
                ${MiniPlaylist(sime,"Sime identifico")}
                ${MiniPlaylist(kindie,"K-indie")}
            
            </div>

        </section>

    `
}

export default Content;
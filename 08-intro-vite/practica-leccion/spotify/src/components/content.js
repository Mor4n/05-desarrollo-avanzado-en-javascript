import { workout } from "../barrels/assets";
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
                ${MiniPlaylist(workout,"Workout")}
                ${MiniPlaylist(workout,"Workout")}
                ${MiniPlaylist(workout,"Workout")}
                ${MiniPlaylist(workout,"Workout")}
                ${MiniPlaylist(workout,"Workout")}
                ${MiniPlaylist(workout,"Workout")}
                ${MiniPlaylist(workout,"Workout")}
                ${MiniPlaylist(workout,"Workout")}
            
            </div>

        </section>

    `
}

export default Content;
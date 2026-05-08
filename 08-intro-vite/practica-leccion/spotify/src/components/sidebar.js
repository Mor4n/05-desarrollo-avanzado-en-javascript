import { aimer, cancionesImpactan, forge, kindie, megusta, meRecuerdaA, queMeRecuerda, sime, tresTresTres, workout } from "../barrels/assets";
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

        </*Esto lo podría convertir en objeto en un futuro */>

        ${Sidecard(megusta, "Tus me gusta",false,"Playlist","709 canciones")}
        ${Sidecard(kindie, "Tus me gusta",true,"Playlist","709 canciones")}
        ${Sidecard(workout, "Tus me gusta",true,"Playlist","709 canciones")}
        ${Sidecard(cancionesImpactan, "Tus me gusta",true,"Playlist","709 canciones")}
        ${Sidecard(forge, "Tus me gusta",false,"Playlist","709 canciones")}
        ${Sidecard(meRecuerdaA, "Tus me gusta",false,"Playlist","709 canciones")}
        ${Sidecard(queMeRecuerda, "Tus me gusta",false,"Playlist","709 canciones")}
        ${Sidecard(tresTresTres, "Tus me gusta",false,"Playlist","709 canciones")}
        ${Sidecard(sime, "Tus me gusta",false,"Playlist","709 canciones")}
        ${Sidecard(aimer, "Tus me gusta",false,"Playlist","709 canciones")}




    </section>



    `
}

export default Sidebar;
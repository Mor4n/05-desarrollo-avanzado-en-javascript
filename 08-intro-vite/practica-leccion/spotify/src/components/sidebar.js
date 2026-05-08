import Sidebutton from "./common/sidebutton";
import Sidecard from "./common/sidecard";



const Sidebar = () =>{

    return /* html */`
    
    <section id="biblioteca">
        <h2>Tu biblioteca</h1>

        <div class="botones-filtro-container">
            ${Sidebutton("Playlists")}
            ${Sidebutton("Artistas")}
            ${Sidebutton("Álbumes")}
            ${Sidebutton("Podcasts")}
        </div>




    </section>



    `
}

export default Sidebar;
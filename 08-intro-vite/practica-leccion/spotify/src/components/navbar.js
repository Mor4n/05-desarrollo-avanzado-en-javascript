import  { logo,home, avatar } from "../barrels/assets"

const Navbar = () =>{

    return /* html */`
    <nav>
        <img src="${logo}" id="logo">
        
        <div id="home-search">
            <img src="${home}" alt="Icono de home" id="home" />
            <div id="search-container">
                <input type="text" id="search" placeholder="¿Qué quieres reproducir?"/>
            </div>
        </div>
        <img src="${avatar}" id="avatar">

    </nav>
    `
}

export default Navbar;
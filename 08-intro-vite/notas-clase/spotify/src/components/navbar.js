import logo from "../assets/logo.png" // con vite podemos importar cosas que no sean .js, para usar fotos debemos usar un import

import Avatar from "../assets/avatar.jpg" // lo que se pone en import es un alias, no es necesario que tenga el mismo nombre que el nombre del archivo

const Navbar = (avatar) =>{

    return /*html */`

        <nav>
            <img id="logo" src="${logo}">

            <div class="center-bar">
                <div>
                    HOME
                </div>
                <div>
                    BUSCADOR
                </div>
            </div>

            <img id="avatar" src="${Avatar}">

        </nav>

    `


}

export default Navbar;

const Sidecard = (imgUrl, nombre,anclado, tipo, autor ) =>{

    return /* html */`

    <article class="sidecard">
        <img src="${imgUrl}" alt="Imagen de playlist" srcset="" class="sidecard-img" />

        <div class="sidecard-datos">
            <h3 class="sidecard-titulo">${nombre}</h3>
            <p class="sidecard-autor">${ anclado ? "📌" : "" } ${tipo} • ${autor}</p>
        </div>

    </article>

    `
}

export default Sidecard;
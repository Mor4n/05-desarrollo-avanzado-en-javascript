
const MiniPlaylist = (imgUrl, nombre) =>{

    return /* html */`
        <article class="miniplaylist">
            <img src="${imgUrl}" alt="Imagen pequeña de la playlist" srcset="" class="miniplaylist-img" />
            <p class="miniplaylist-p">${nombre}</p>
        </article>

    `


}

export default MiniPlaylist
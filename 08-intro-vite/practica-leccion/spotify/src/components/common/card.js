
const Card = (imgUrl, titulo) =>{

    return /* html */`
        <article class="playlist-card">
                <img src="${imgUrl}" alt="" class="playlist-card-img"/>
                <p class="playlist-card-text">${titulo}</p>
        </article>

    `
}

export default Card;
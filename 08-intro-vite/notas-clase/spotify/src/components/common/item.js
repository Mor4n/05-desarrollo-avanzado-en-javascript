
// esto va en una carpeta llamada common, ya que es reusable

const Item = (title, description, imgUrl) =>{

    return /* html */`
        <div class="item">
            <img src="${imgUrl}" id="">
            <h4>${title}</h4>
            <p>${description}</p>
        </div>


    `

}

export default Item
import Item from "./common/item"


const Content = (items) =>{

    return /*html */`

        <main>
            <div id="podcasts-header">
                <h1>Podcasts</h1>
            </div>
            <h4>Meet the Podcast Awards nominees</h4>
            <div id="items">
                    ${
                        items.map( 
                            // destructuro dentro de donde iria (element)
                            ({title, description, imgUrl}) =>
                            Item( title, description, imgUrl )

                        ).join("") 
                        // el join es porque si no lo pongo, por el map que me devuelve un arreglo, se verán "," entre cada cosa

                    }    


            </div>
        
        </main>


    `

}

export default Content
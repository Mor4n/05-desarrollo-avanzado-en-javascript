
    let input_nombre = document.querySelector("#input_nombre")
    let btn_fetch = document.querySelector("#fetch-btn")
    let btn_axios = document.querySelector("#axios-btn")

    let formulario = document.querySelector("#formulario")

    let reproductor = document.querySelector("#reproductor");
    let imagen_reproductor = document.querySelector("#imagen-reproductor");

    let data_container = document.querySelector(".data-container")


    function  axiosObtenerDatos (valor) {
        let api =`https://itunes.apple.com/search?term=${encodeURIComponent(valor)}&media=music&entity=song&limit=3`;
        

        axios.get(api)
        .then( respuesta => recorrerRespuesta(respuesta.data.results))


    }


    function fetchObtenerDatos(valor) {
        //? Con encodeURIComponent hago que si escribo "Instant crush - Daft punk" se ponga algo como "Instant%20Crush%20 - %20Daft%20Punk"
        
        let api =`https://itunes.apple.com/search?term=${encodeURIComponent(valor)}&media=music&entity=song&limit=3`;
        
        fetch(api)
        .then((respuesta) => respuesta.json())
        .then((datos)=>{

            // console.log(datos.results); arreglo que en el indice 0 va a mandar un objeto
            
            recorrerRespuesta(datos.results);

        }
        )

    }



    function recorrerRespuesta(respuesta){
        console.log(respuesta);
        
        data_container.innerHTML = ``; // reset de lo que esté dentro del contenedor

        respuesta.forEach(elemento => {
            mostrarHTML(elemento);
        });

        aplicarDegradadoFondo();


    }

    function aplicarDegradadoFondo() {
    const img = document.querySelector('.cover-img');

    if (!img) return;

    // si la imagen ya terminó de cargarse (.complete), tipo ya cargó o nel?
    if (img.complete) {
        generarGradiente(img);
    } else {
        // estado de una imagen como tipo eh avisame cuando ya cargue la imagen
        img.onload = () => generarGradiente(img);
    }
}

async function generarGradiente(img) {
    const palette = await Vibrant.from(img.src).getPalette();

    const color1 = palette.LightVibrant?.hex || palette.LightMuted?.hex || "#888";
    const color2 = palette.Vibrant?.hex || palette.Muted?.hex || "#555";
    const color3 = palette.DarkVibrant?.hex || palette.DarkMuted?.hex || "#222";

    document.body.style.background = `
        linear-gradient(135deg, ${color1}, ${color2}, ${color3})
    `;
}


    function mostrarHTML(objeto) {
        console.log(objeto);

        const { artistName, collectionName, trackName, previewUrl, artworkUrl100, releaseDate } = objeto;

        const imagenAltaResolucion = artworkUrl100.replace("100x100", "300x300");

        const reproductor_HTML = `

            <article class="tarjeta-cancion">
                <section class="tarjeta-cancion-info">
                    <p class="tarjeta-cancion-cancion">Canción</p>
                    <h2>${trackName}</h2>
                    <p><span>Artista:</span> ${artistName}</p>
                    <p><span>Álbum:</span> ${collectionName}</p>
                    <p><span>Lanzamiento:</span> ${releaseDate}</p>
                </section>

                <section class="tarjeta-cancion-reproductor">
                    <div class="imagen-degradado">
                        <img src="${imagenAltaResolucion}" class="cover-img" alt="Portada de ${trackName}"/>
                    </div>

                    <div class="info-obtenida" id="contenedor-reproductor">
                        <video-player>
                            <video-minimal-skin>
                                <media-poster>
                                    <img src="${imagenAltaResolucion}" id="imagen-reproductor" alt="Portada de ${trackName}"/>
                                </media-poster>

                                <video src="${previewUrl}" playsinline id="reproductor"></video>
                            </video-minimal-skin>
                        </video-player>
                    </div>
                </section>
            </article>

            
        `;



        data_container.innerHTML +=reproductor_HTML; // añado los datos




    }



    btn_fetch.addEventListener("click",(e)=>{
        e.preventDefault();
        fetchObtenerDatos(input_nombre.value);
    })



    btn_axios.addEventListener("click",(e)=>{
        e.preventDefault();
        axiosObtenerDatos(input_nombre.value);
    })


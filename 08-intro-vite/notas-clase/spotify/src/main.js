import './style.css'

import Navbar from "./components/navbar"
import Content from "./components/content"

const items = [
    {
        imgUrl: "https://picsum.photos/200",
        title: "La cotorriza",
        description: "Podcast de comedia mexicana",
    },
    {
        imgUrl: "https://picsum.photos/200",
        title: "Leyendas legendarias",
        description: "Podcast de terror mexicano",
    },
    {
        imgUrl: "https://picsum.photos/200",
        title: "Entiende tu mente",
        description: "Podcast de psicología mexicana",
    },

]

document.querySelector('#app').innerHTML = `
    ${ Navbar() }
    ${ Content(items) }
`

setupCounter(document.querySelector('#counter'))

import Content from './components/content'
import Download from './components/download'
import MusicPlayer from './components/musicplayer'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import './style.css'



document.querySelector('#app').innerHTML = /* html */`

    ${Navbar()}
    <main>
        ${Sidebar()}
        ${Content()}
        ${Download()}
        ${MusicPlayer()}
    </main>


`


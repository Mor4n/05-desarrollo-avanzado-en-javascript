import Content from './components/content'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import './style.css'



document.querySelector('#app').innerHTML = /* html */`

    ${Navbar()}
    <main>
        ${Sidebar()}
        ${Content()}
    </main>


`


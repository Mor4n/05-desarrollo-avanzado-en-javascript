import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import './style.css'



document.querySelector('#app').innerHTML = `

${Navbar()}
${Sidebar()}

`


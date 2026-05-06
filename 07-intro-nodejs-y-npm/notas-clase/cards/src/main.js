import './style.css'

import Card from "./components/Card.js"

// Hago destructuración para traerme SOLO el minutesToHours
import { minutesToHours } from './util.js'

document.querySelector('#app').innerHTML = /* html */`
${Card("Adriana","Holaaa",60)}
${Card("Reyna","Holaa",120)}
${Card("Benjamin","Holaaaaaaaa",600)}
${Card("Brayan","Holaaaaaaaaaaaaaa",650)}


`
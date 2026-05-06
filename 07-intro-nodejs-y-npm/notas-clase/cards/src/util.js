// Varias funciones que no necesitan utilizarse siempre

const capitalizeName = (name) =>{
    return name.charAt(0).toUpperCase() + name.slice(1);
}

const minutesToHours = (minutes) => {
    return minutes / 60;
}

const colorChange = (input, color) =>{
    input.style.backgroundColor = color;
}


// como son varias funciones no puedo poner export default
// Entonces lo exporto como un objeto con { }
export { capitalizeName, minutesToHours, colorChange } 
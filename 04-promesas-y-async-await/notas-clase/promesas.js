
// Nueva promesa: Resolve, Reject
const promesa = new Promise((resolve, reject)=>{

    if(false){
        resolve("Todo en orden!")  // Pasa a then

    }
    else{
         reject("Todo mal") // Pasa a catch
    }
})

promesa
.then( (respuesta) => console.log(respuesta)) // Con .then obtengo la respuesta
.catch( (error) => console.log(error)) // Con .catch obtnego el error


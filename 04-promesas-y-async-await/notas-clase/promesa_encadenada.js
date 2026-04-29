
const promesa_encadenada = new Promise((resolve_afuera, reject_afuera)=>{
    resolve_afuera(   
        new Promise(  (resolve_dentro, reject_dentro)=>{
            
             if(true){
                resolve_dentro("Todo en orden!")  // Pasa a then

                }
                else{
                    reject_dentro("Todo mal") // Pasa a catch
                }
                        

        } )

    )
})

promesa_encadenada
    .then((respuesta_afuera) => {
        console.log(respuesta_afuera)
        return respuesta_afuera}
        
    ) // primera promesa
    .then((respuesta_dentro) => console.log(respuesta_dentro)) // la segunda promesa
    
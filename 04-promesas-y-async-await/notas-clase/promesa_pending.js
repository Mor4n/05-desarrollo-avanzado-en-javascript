
const promesa = new Promise((resolve, reject)=>{
    setTimeout(() => {

        if(Math.random()>0.5){
            resolve("Todo en orden!")

        }
        else{
            reject("Todo mal")
        }

    }, 1000); // tiempo en milisegundos

})

console.log(promesa); // Mostrará estado pending

// Y luego despues de 1 seg va a mostrar res o error
promesa.then( res => console.log(res))
.catch(err => console.log(err))
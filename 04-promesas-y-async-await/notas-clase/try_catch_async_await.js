
const axios = require("axios")

const main = async () =>{

    // Con try catch podemos hacer multiples peticiones CON UN SOLO CATCH
    try {
        let respuesta;
        respuesta = await axios.get("https://httpbin.org/uuid");
        console.log(respuesta.data);

        respuesta = await axios.get("https://httpbin.org/uuid");
        console.log(respuesta.data);
        
        respuesta = await axios.get("https://httpbin.org/uuid");
        console.log(respuesta.data);
        respuesta = await axios.get("https://httpbin.org/uuid");
        console.log(respuesta.data);

        respuesta = await axios.get("https://httpbin.org/uuid");
        console.log(respuesta.data);

        // Va a dar error
        respuesta = await axios.get("https://httpbin.org/status/400");
        console.log(respuesta.data);

        respuesta = await axios.get("https://httpbin.org/status/500");
        console.log(respuesta.data);
        
        
    } catch (error) {

        console.error(`Hubo un error ${error.code}`);
        

    }

    
}

main()
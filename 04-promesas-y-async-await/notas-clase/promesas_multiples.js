
const promesa1 = new Promise((resolve,reject)=>{
    //...
})

const promesa2 = new Promise((resolve,reject)=>{
    //...
})

// Le pasamos un arreglo de promesas que va a tratar de hacer
Promise.all([promesa1,promesa2], ()=>{
    // esto pasará cuando se resuelvan o error todo el arreglo de promesas
})

// Atrapa cualquier error el trycatch
try {
    
    console.log(algoquenoexiste);
    
    

} catch (error) {
    console.error(`Pasó un error ${error}`);
    // Lo mejor en la vida real es tratar de NO cachar todos los errores, es usarlo con cabeza y usarlo cuando sea adecuado
}
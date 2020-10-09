exports.ejercicio7 = (numero) => {

    let numeroCasasIngresadas = numero ;
    let fosforos = 6 ;
    let contador = 0;
       
function calcularCasas() {
    
    if (numeroCasasIngresadas >=2) {
        for (let index = 0; index < numeroCasasIngresadas; index++) {
            fosforos = fosforos;
            
            
                
                contador += fosforos ;
            
                contador = contador - 1;
        
        }
         console.log(contador + 1);
        
    }
    else{

        console.log(fosforos);
                        }

return calcularCasas;
 
}
    calcularCasas();

}
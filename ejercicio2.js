exports.ejercicio2 = (numeroIngresado) => {

    let numero  = numeroIngresado ; 
    
    

    function sumaNumero(){
        let sumatoria = 0;


        console.log(`Numero a sumar:${numero}`);
for (let index = 1; index <= numero; index++) {



sumatoria = index + sumatoria;

}
console.log(`Resultado: ${sumatoria}`);

return sumatoria;

}

sumaNumero();

    }
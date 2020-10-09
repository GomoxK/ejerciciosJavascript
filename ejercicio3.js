exports.ejercicio3 = (numero1, numero2) => {
    
let numeroingresado = numero1;
let otroNumeroIngresado = numero2;
let resultadoNumeroMayor = 0 ;

function NumeroMayor(){


        if (otroNumeroIngresado > numeroingresado   ) {
            console.log(`Numeros Ingresados: ${numeroingresado} , ${otroNumeroIngresado}. El numero mayor es: "g" y su numero es: ${otroNumeroIngresado}`);
        }else if(otroNumeroIngresado < numeroingresado  ) 
        {
            console.log(`Numeros Ingresados: ${numeroingresado} , ${otroNumeroIngresado}. El numero mayor es: "f" y su numeros es: ${numeroingresado}`);

        }else{

            console.log(`${numeroingresado} , ${otroNumeroIngresado} El numero mayor es: ninguna`);
        }


}



NumeroMayor();
  

    };
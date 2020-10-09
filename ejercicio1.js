exports.ejercicio1 = (numero) => {

    let numeroIngresado = numero;
    let numeroMayor = 0;
    let numeroMenor = 0;
    
    const guardarNumerosDividos = [];

    console.log(`El Numero Ingresado es:${numeroIngresado}`);
    
    numeroIngresado = numeroIngresado / 2 ;
    
    numeroMenor = Math.floor(numeroIngresado);
    
    
    
    numeroMayor = Math.ceil(numeroIngresado);
    
    
    guardarNumerosDividos.push({
    
        numeroMenor,
        numeroMayor,
    
    });

    
    console.log(guardarNumerosDividos);
    
    
    }
    
    
    
    
    
    
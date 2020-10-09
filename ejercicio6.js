exports.ejercicio6 = (palabraOculta) => {

    let palabraIngresada = palabraOculta;
    

let minusculas;

let letrasMinusculas = /[a-z]/g;

   
    console.log(palabraIngresada)
  
    function buscarMinusculas(buscar) {
        minusculas = buscar.match(letrasMinusculas)
        console.log(minusculas);
    }
        
    buscarMinusculas(palabraIngresada);

    }
    
    
    
    
    
    
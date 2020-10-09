exports.ejercicio5 = (numero) => {

   let cantidadNumeros = numero;
   let numeroAleatorios = [];

   

   
   
   let limite = cantidadNumeros + 1;
   for (let i = 0; i < cantidadNumeros; i++) {
    numeroAleatorios.push(Math.floor(Math.random()*limite));
   }
   
 console.log(numeroAleatorios);
  
  console.log(Math.min.apply(null, numeroAleatorios), ",", Math.max.apply(null, numeroAleatorios )   );
  



    
    
    };
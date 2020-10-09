exports.ejercicio4 = (numero) => {

  let numeroIngresado = numero;
    
  function convertirBinario(x) {
    let numeroBinario = 0;
    let acumuladora, i = 1;
    while (x != 0) {
        acumuladora = x % 2;
        x = parseInt(x / 2);
        numeroBinario = numeroBinario + acumuladora * i;
        i = i * 10;
    }
    console.log(`El numero decimal es: ${numeroIngresado}`);
    console.log(`El numero binario es: ${numeroBinario}`);
}


convertirBinario(numeroIngresado);




};
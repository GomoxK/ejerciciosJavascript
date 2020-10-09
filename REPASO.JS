
// Tipos de datos en JS
// JS tiene tipado dinamico que significa que tienen tipos de datos
// Las variables no estan atados a ellos
// 1. Number
// Todos los numeros (enteros, decimales) y valores numericos especiales: Infinity, -Infinity, NaN (not a Number)
console.log(1 / 0); //Infinity
console.log(Infinity); //Infinity
console.log("abc" / 2); //NaN (la operacion propaga un NaN)

// 2. String
//Todos los valores de cadenas de texto o caracter.
//SE puedenescribir de 3 maneras distintas:
//    2.1 Doble quotes: "Hola Mundo"
//    2.2 Single quotes: 'Hola Mundo'
//    2.3 Backticks:
console.log("Hola Mundo");

// 3. Boolean (logical type)
// solamente tiene dos valores posibles: true o false
console.log(true);
console.log(false);

// 4. Null value
// No pertenece a ningun tipo de datos solamente contiene el valor null
console.log(null);

// 5. Undefined value
//valor no asignado. si una variables es declarada pero no definida con un valor
// su valor es indefined
console.log(undefined);

// 6. Object
// Los tipos de datos anteriores son conocidos como primitivos, porque solo pueden contener un valor
// singular. a diferencia, object se utiliza para colecciones de valores o entidades mas complejas.
console.log({});

// 7. Symbol
// Se utiliza para crear identificadores unidos para los objetos

//Declaracion de variables
/*
    ECMAScript 5 ó 6 (ES2015)

    1. Declaracion de una variable
    2. Inicializacion de la variable
    3. Scope (alcance)
    4. Hoisting
*/

// 1. Declaracion de variable vs inicializacion
//Una declaracion de una variable crea o introduce un nuevo identificador
var unaVariable;
console.log(unaVariable); //undefined

// 2. El valor por defecto de una variables (indefined) cambia al momento de inicializacion
unaVariab
// 3. Scope (alcance)
//Define donde las variables son accesibles dentro de un porgrama. En JS existen dos tipos de scope:
//   3.1 Scope global
//   3.2 Scope de la funcion

function getDate(){
    var date = new Date(); //3.2 Scope de la funcion

    return date;
}

console.log(date); // Reference error
console.log(getDate());

function getDate(){
    var date = new Date();

    function formatDate(){
        return date.toDateString().slice(4);
    }
    return formatDate();
}

// 4. Hoisting 
// Es el hecho que en JS, "Las variables son nicializadas con el valor undefined cuando son creadas".
// A esto se le conoce como "Creation phase".

// Declaracion de variables, 3 formas:
// 1. var
// 2. let
// 3. const (constante)

// var vs let
// La principal diferencia entre var y let es que let en lugar de function scope, es block scoped.
// var: function scoped
//  retornan undefined si la variable no esta inicializada.
// let: block scoped
//  TypeError cuando se accede a una variable sin ser inicializada.

// let vs const
// const es similar a let, con la unica diferencia que una vez asignada un valor a una variable const,
// este no puede ser reasignado. TypeError cuando se accede a una variable sin ser inicializada.
const dragon = "Dracarys";
dragon = "Drogon"; // TypeError: Assignament to constant variable

//La variables de tipo const si pueden ser modificadas
const persona = {
    nombre: "Juan Perez"
};

console.log(persona.nombre);

persona.nombre = "John Wick";

console.log(persona.nombre);

// Regla: Todas las variables seran constantes a menos que su funcionamiento requiera lo contario.

//Cadenas de texto
//Definir con single quotes, double quotes y backticks.
const libro = "Canción de hielo y fuego";
const volumen = "Uno";

//Convertir texto a mayusculas
console.log(libro.toUpperCase());

//Convertir el texto a minisculas
console.log(libro.toLowerCase());

//Convertir texto a un arreglo
console.log(libro.split(""));

//Obtener un fragmento del texto
console.log((libro,indexOf("hielo")));

console.log(libro.slice(0, 11));

//Reemplazar una parte del texto
console.log(libro.replace("Canción", "Rola"));

//Verificar palabra
console.log(libro.includes("fuego"));

//Repetir el valor de una variable string
console.log(libro.repeat(3));

//Concatenar
console.log(libro + " " + volumen);

//Concatenar con templaten string utilizando backticks
//Regla: Concatenar siempre utilizando tempalte string (backticks)
console.log('El nombre del libro es: ${libro} ${volumen}');

//Arreglos
const premierleage = [
    "Manchester United",
    "Chelasea",
    "Liverpool",
    "Arsenal",
    "City"
];

console.log(premierleage);

console.log(premierleage[3]);

//Mostrar el tamaño del arreglo
console.log(premierleage.length);

//Modificar elemento existente
premierleage[2] = "Wolfs";

console.log(premierleage);

//Revertir el orden de un arreglo
//El cambio es permanente
console.log(premierleage.reverse());

//Agregar un nuevo elemento
premierleage.push("Arsenal");
premierleage.push("Leicester City");

//Buscar un elemento dentro del arreglo
console.log(premierleage.indexOf("Chelsea"));

//Quitar el ultimo elemento del arreglo
premierleage.pop();

//Remover en base al indice
premierleage.slice(2, 1);
console.log(premierleage);

// Filtro
const anotherpremierleague = premierleage.filtrer(function (team){
    return = team "City";
});

console.log(anotherpremierleague);

// Numero en JS
const number1 = "15";
const number2 = -10;
const number3 = 21.5;
const number4 = "123.144";
const number5 = -30.144;

console.log(typeof number1);
console.log(typeof number2);
console.log(typeof number3);
console.log(typeof number4);
console.log(typeof number5);

// == compara variables
// === compara valor de las variables

// Convertir de string a number
const number6 = parseInt(number1);
console.log(number6);

console,log(Number("123")); // 123

// Para comparar valores de variables podemos utilizar == y ===
"123" == 123 // true
"123" === 123 // false

//Math
//Redondear o reducir el numero de decimal (fijar)
console.log(parseFloat(2.9));

//Redondeo hacia abajo
console.log(Math.floor(2.9));

//Redondeo hacia arriba
console.log(Math.ceil(2.2));

//Redondeo
console.log(Math.round(number4));

//Raiz cuadrada
console.log(Math.sqrt(2));

//Potencia
console.log(Math.pow(8, 3));

//Fechas
const today = new Date();
console.log(today);

//Mostrar algunos valores especificos de la fecha
console.log('El año actual es: ${today.getFullYear()}');
console.log('El dia actual es: ${today.getDate()}');
console.log('El dia de la semana es: ${today.getDay()}');
console.log('La hora es: ${today.getHours()} con ${today.getMinutes()} minutos');

//Condiciones 
//If - elseif - else - ternary opefrator
const cantidadApagar = 1000;
const saldo = 500;

if (saldo < cantidadApagar) {
    console.log("No tienes lons fondos suficientes para realizar el pago");
}   else{
    console.log("Pago realizado correctamente");
}

const unaEdad = 20;
const otraEdad = 21;

if (unaEdad > otraEdad)
console.log("una edad es mayor que otra edad");
else if (unaEdad == otraEdad) console.log("La edades son iguales");
else console.log("Una edad es menor que otra edad")

//Ternary operator
otraEdad > 21 ? "Eres mayor de edad" : "Eres menor de edad";

// Operadores logicos
// Operador de comparacion
//  1. Comparacion estricta (===) solo es verdadera si los operadores son del mismo tipo y 
//     los contesnidos coinciden
//  2. Comparacion abstracta (==) convierte los opperandos al mismo tipo de datos antes de hacer la comparacion

"123" == 123; // true
"123" === 123; // false

//    3. Operador de desigualdad estricta (!==)
//    4. Operador de desigualdad abstracta (!=)
//    5. Mayor que (>)
//    6. Mayor o igual que (>=)
//    7. Menor que (<)
//    8. Menor o igual que (<=)
​
// Operadores && (AND) || (OR) ! (NOT)
​
const usuarioValido = true;
​
if (saldo > cantidadAPagar && usuarioValido) {
  console.log("Usuario autenticado y saldo suficiente para realizar el pago");
}
​
// Switch
const metodoPago = "PayPal";
​
switch (metodoPago) {
  case "TarjetaCredito":
    console.log("Has seleccionado pago con tarjeta de crédito");
  case "Puntos":
    console.log("Has seleccionado tus puntos acumulados para realizar el pago");
  case "PayPal":
    console.log("Has seleccionado PayPal para realizar el pago");
  default:
    console.log("¡Metodo de pago no válido!");
}
​
// Funciones
// JS una función es un "subprograma" que puede ser llamado por código externo
// (o interno en caso de una recursión) a la función. A una función se le pueden pasar valores
// y puede retornar un valor.
​
// Tipos de función (depende de la versión ES2015 - ES6)
//  1. La instrucción function
//  2. El operador function (expresión)
//  3. Función flecha (arrow function)
//  4. Constructor function
​
// 1. La instrucción function
function holaMundo() {
  console.log("Hola mundo!");
}
​
holaMundo();
​
// 2. El operador function (expresión)
const mensaje = function () {
  console.log("Esta es una función sin nombre (anónima)");
};
​
mensaje();
​
// 3. Función flecha (arrow function)
const otroMensaje = () => {
  console.log("Esto es una arrow function");
};
​
otroMensaje();
​
// 4. Constructor function
const multiplicar = new Function("x", "y", "return x * y;");
​
multiplicar(5, 2);
​
// * Reglas para nombres de variables / funciones
// 1. Debe tener un nombre significativo
// 2. Utilizar camelCase para escribir el nombre de las variables
// 3. Las variables no pueden comenzar con un número
// 4. Mayúsculas y minúsculas son distintas! Tener cuidado con el nombre.
​
// Ejemplo de una función que imprime el total del carrito de compras
function totalCarrito(articulos) {
  const impuestos = 0.15;
  let total = 0;
​
  // Necesito recorrer el arreglo de objetos
  articulos.forEach((producto) => {
    console.log(`Producto: ${producto.nombre} Precio: L ${producto.precio}`);
    total += producto.precio;
  });
​
  // Calcular los impuestos
  total = total + total * impuestos;
​
  console.log(`Total a pagar: L ${total.toFixed(2)}`);
}
​
const productos = [
  {
    nombre: "Teclado RGB con macros",
    precio: 2500,
  },
  {
    nombre: "Mouse inalámbrico ergonómico",
    precio: 1200,
  },
];
​
// Llamar la función que calcula el total de los productos
totalCarrito(productos);
// Importar express
const express = require("express");
// Importar handlebars como template engine
const exphbs = require("express-handlebars");
// Importar body parser que nos permite acceder al cuerpo de la petición HTTP
const bodyParser = require("body-parser");
// Importar la función de cálculo de método francés



const { ejercicio1 } = require("./ejercicio1");

const { ejercicio2 } = require("./ejercicio2");

const { ejercicio3 } = require("./ejercicio3");

const { ejercicio4 } = require("./ejercicio4");

const { ejercicio5 } = require("./ejercicio5");

const { ejercicio6 } = require("./ejercicio6");

const { ejercicio7 } = require("./ejercicio7");




// Crear un servidor express
const app = express();

// Indicar a express utilizar handlebars como template engine
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));

app.set("view engine", "hbs");

// Habilitar body parse para leer los datos del cuerpo de peticiones POST
app.use(bodyParser.urlencoded({ extended: true }));

// Crear una ruta para /
// Información sobre los verbos HTTP
// https://developer.mozilla.org/es/docs/Web/HTTP/Methods
app.get("/", (req, res, next) => {
  res.send("-----Bienvenido a Ejercicios de Javascript-----");
});




// Crear una ruta para /
// Información sobre los verbos HTTP
// https://developer.mozilla.org/es/docs/Web/HTTP/Methods



app.get("/ejercicio1", (req, res, next) => {
  res.render("formulario_ejercicio1");
});

app.get("/ejercicio2", (req, res, next) => {
  res.render("formulario_ejercicio2");
});

app.get("/ejercicio3", (req, res, next) => {
  res.render("formulario_ejercicio3");
});

app.get("/ejercicio4", (req, res, next) => {
  res.render("formulario_ejercicio4");
});

app.get("/ejercicio5", (req, res, next) => {
  res.render("formulario_ejercicio5");
});


app.get("/ejercicio6", (req, res, next) => {
  res.render("formulario_ejercicio6");
});

app.get("/ejercicio7", (req, res, next) => {
  res.render("formulario_ejercicio7");
});



app.post("/divisionNumeros", (req, res, next) => {
  // Asignación por destructuring
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
  const { numero} = req.body;

   ejercicio1(numero);

  res.send("Peticion aceptada");
});



app.post("/sumaNumeros", (req, res, next) => {
  // Asignación por destructuring
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
  const { numeroIngresado} = req.body;

   ejercicio2(numeroIngresado);

  res.send("Peticion aceptada");
});


app.post("/retornarNumeroMayor", (req, res, next) => {
  // Asignación por destructuring
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
  const { numero1,numero2} = req.body;

   ejercicio3(numero1,numero2);

  res.send("Peticion aceptada");
});


app.post("/conversionNumeros", (req, res, next) => {
  // Asignación por destructuring
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
  const { numero} = req.body;

   ejercicio4(numero);

  res.send("Peticion aceptada");
});



app.post("/encontrarNumeroMenoryMayor", (req, res, next) => {
  // Asignación por destructuring
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
  const { numero} = req.body;

   ejercicio5(numero);

  res.send("Peticion aceptada");
});


app.post("/palabraEntreMultitud", (req, res, next) => {
  // Asignación por destructuring
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
  const { palabraOculta} = req.body;

   ejercicio6(palabraOculta);

  res.send("Peticion aceptada");
});


app.post("/casasFosforos", (req, res, next) => {
  // Asignación por destructuring
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
  const { numero} = req.body;

   ejercicio7(numero);

  res.send("Peticion aceptada");
});






// Inicializar el servidor en un puerto en específico
app.listen(5000, () => {
  console.log("Servidor ejecutándose en el puerto 5000");
});
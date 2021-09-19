//se usa express para manejar las rutas de las peticiones
const express = require("express");

const path = require("path");

//configuramos para que el path inicial sea dentro de publico
let initial_path = path.join(__dirname, "public");

const app = express();
app.use(express.static(initial_path));


//ruta de inicio, manda a llamar a la pagina de index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(initial_path, "index.html"));
});


//esta es la ruta para desplegar about.html, se lanza con la direccion
//de la id de la pelicula
//ejemplo: localhost:3000/32456
app.get("/:id", (req, res) => {
  res.sendFile(path.join(initial_path, "about.html"));
});

app.use((req, res) => {
  res.json("404");
});

//inicia express en el puerto 3000
app.listen(3000, () => {
  console.log("EScuchando en puerto 3000");
});

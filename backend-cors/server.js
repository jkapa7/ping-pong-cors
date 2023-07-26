const express = require("express");
const cors = require("cors");

const app = express();

app.use((req, res, next) => {
  {
    /*Defino que origenes, es decir que clientes tienen permiso para hacer peticiones*/
  }
  res.header("Access-Control-Allow-Origin", ["http://127.0.0.1:5173"]);

  {
    /*Permito los metodos que el cliente podra hacer, puedo quitar y dejar los que se necesiten*/
  }
  res.header("Access-Control-Allow-Methods", "GET, DELETE");
  next();
});

//OTRA FORMA DE HACERLO ES CON EL MODULO CORS, NPM I CORS, Y LO EJECUTO
app.use(
  cors({
    origin: ["http://127.0.0.1:5173/", "http://127.0.0.1:5173/"],
  })
);

app.delete("/ping", (req, res) => {
  res.send("Pong");
});

app.listen(3000);
console.log("Server on port 3000");

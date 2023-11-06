const express = require("express");
const path = require("path");

const app = express();
const PORT = 4000;

app.use(express.static(path.join(__dirname, "public"))); // Configura la carpeta "public" como estática

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html")); // Sirve el archivo index.html
});

// Exporta la API de Express
module.exports = app;

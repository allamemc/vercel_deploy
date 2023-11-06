// index.js
const express = require("express");

const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("index.html");
});

// Export the Express API
module.exports = app;

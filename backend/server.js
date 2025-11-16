const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Rota já existente...
// app.get("/usuarios", ...);

// NOVA ROTA: lista de profissionais
app.get("/profissionais", (req, res) => {
  fs.readFile("./data/profissionais.json", "utf8", (err, data) => {
    if (err) return res.status(500).json({ erro: "Erro ao ler profissionais." });
    res.json(JSON.parse(data));
  });
});

app.listen(3001, () => console.log("Server rodando na porta 3001"));

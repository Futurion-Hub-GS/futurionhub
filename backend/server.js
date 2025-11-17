const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// ---------------------------
// 1. ROTA DE LOGIN
// ---------------------------
app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  const usuarios = JSON.parse(
    fs.readFileSync("./data/usuarios.json", "utf8")
  );

  const user = usuarios.find(
    u => u.email === email && u.senha === senha
  );

  if (!user) {
    return res.status(401).json({ erro: "Email ou senha incorretos." });
  }

  res.json({
    id: user.id,
    nome: user.nome,
    email: user.email
  });
});

// ---------------------------
// 2. ROTA DE PROFISSIONAIS (VOCÊ JÁ TINHA)
// ---------------------------
app.get("/profissionais", (req, res) => {
  fs.readFile("./data/profissionais.json", "utf8", (err, data) => {
    if (err) return res.status(500).json({ erro: "Erro ao ler profissionais." });
    res.json(JSON.parse(data));
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend rodando na porta ${PORT}`);
});

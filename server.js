const express = require("express");
const app = express();

app.use(express.json());

// Rota teste
app.get("/", (req, res) => {
  res.send("Sistema online funcionando 🚀");
});

// Login exemplo
app.post("/login", (req, res) => {
  const { user } = req.body;
  res.json({ mensagem: "Bem-vindo " + user });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
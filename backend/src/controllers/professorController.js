const express = require("express");
const Professor = require("../models/Professor");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

const router = express.Router();

router.post("/cadastrar", async (req, res) => {
  const { SIAPE } = req.body;

  try {
    if (await Professor.findOne({ SIAPE })) {
      return res.status(400).send({ error: "SIAPE já cadastrado" });
    }

    const professor = await Professor.create(req.body);

    professor.senha = undefined;

    return res.send({ professor });
  } catch (err) {
    return res.status(400).send({ error: "Falha ao realizar Cadastro" });
  }
});

router.post("/login", async (req, res) => {
  const { SIAPE, senha } = req.body;
  const professor = await Professor.findOne({ SIAPE }).select("+senha");

  if (!professor) {
    return res.status(400).send({ error: "SIAPE não encontrado" });
  }
  if (!(await bcrypt.compare(senha, professor.senha))) {
    return res.status(400).send({ error: "Senha incorreta" });
  }

  professor.senha = undefined;

  const token = jwt.sign({ id: professor.id }, authConfig.secret, {
    expiresIn: 86400,
  });

  res.send({ professor, token });
});

module.exports = (app) => app.use("/auth", router);
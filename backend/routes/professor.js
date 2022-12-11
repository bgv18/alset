const express = require("express");
const router = express.Router();
const {Professor} = require("../models");
const bcrypt = require("bcrypt");
const {sign} = require("jsonwebtoken");

router.post("/", async (req, res) => {
    const cadastro = req.body;
    const professor = await Professor.findOne({where: {id: cadastro.id}});
    if(professor){
        res.json("ID já usado");
    } else {
        const dataAtual = new Date(Date.now());
        bcrypt.hash(cadastro.senha, 10).then((hash) => {
            Professor.create({
                ID: cadastro.ID,
                Nome: cadastro.nome,
                CPF: cadastro.email,
                senha: hash,
                Ativo: true,
                DataCriacao: dataAtual
            });
            res.json("Sucesso");
        });
    }
});

router.post("/login", async (req, res) => {
    const login = req.body;
    const professor = await Professor.findOne({where: {id: login.id}});
    if(!professor){
        res.json("Usuário não existe");
    } else {
        bcrypt.compare(login.senha, professor.senha).then((match) => {
            if(!match){
                res.json({error: "Usário e/ou senha incorreto(s)"});
            } else {
                const accessToken = sign({
                    nome: professor.nome, id: professor.id}, "utfsecret"
                );
                
                res.json(accessToken);
            }
        });
    }
});

module.exports = router;
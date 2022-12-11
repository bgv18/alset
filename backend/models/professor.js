const sequelize = require('sequelize');
const database = require('../db');
const Professor = database.define('professor',
{
    ID:{
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nome: {
        type: sequelize.STRING,
        allowNull: false
    },
    CPF: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    Ativo: {
        type: sequelize.BOOLEAN,
        allowNull: false
    },
    DataCriacao: {
        type: sequelize.DATE,
        allowNull: false
    },
    Senha: {
        type: sequelize.STRING,
        allowNull: false
    }
})

module.exports = Professor;
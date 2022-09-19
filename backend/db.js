const Sequelize = require('sequelize');

const componenteSequelize = new Sequelize('alset', 'root', '18Bruno18*',
{
    dialect:'mysql', host: 'localhost'
});

module.exports = componenteSequelize;
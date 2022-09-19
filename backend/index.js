(async() => 
{
    const database = require('./db');
    const professor = require('./professor');

    await database.sync();

    await database.create({
        Nome: "Bruno Guerra",
        CPF: 12345678912,
        Ativo: true,
        DataCriacao: Date()
    })

    const alterProfessor = await professor.findByPk(2);
    alterProfessor.Nome = "Bruno";
    await alterProfessor.save();

    professor.destroy({where: {id: 1}});

    const buscaTodosProfessores = await professor.findAll();


})();
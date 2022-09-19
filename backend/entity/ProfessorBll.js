//testeBLL
const database = require('../db');
const professor = require('../professor');

function retornaTodosProfessores (){
    professor.findAll();
};

function retornarProfessorPorId (id) {
    professor.findByPk(id);
};

function deletarProfessor (id){
    professor.destroy({where: {id: id}});
}

function salvarProfessor (id, nome, cpf, ativo, dataCriacao){
    
    if(id == 0){
        database.create({
            Nome: nome,
            CPF: cpf,
            Ativo: ativo,
            DataCriacao: dataCriacao
        })
    }
    else{

    }
    
    
}

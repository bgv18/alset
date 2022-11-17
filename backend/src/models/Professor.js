const mongoose = require("../database");
const bcrypt = require("bcrypt");

const ProfessorSchema = new mongoose.Schema({
  SIAPE: {
    type: String,
    unique: true,
    require: true,
    lowercase: true,
  },
  nome: {
    type: String,
    require: true,
  },
  cpf: {
    type: String,
    require: true,
  },
  email: {
     type: String,
     require: true,
     lowercase: true, 
  },
  senha: {
    type: String,
    require: true,
    select: false,
  },
});

ProfessorSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.senha, 10);
  this.senha = hash;

  next();
});

const Professor = mongoose.model("Professor", ProfessorSchema);

module.exports = Professor;
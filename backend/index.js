const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

const professorRouter = require("./routes/professor");
app.use("/professor", professorRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Servidor rodando na porta 3001");
    });
});
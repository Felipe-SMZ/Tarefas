//1 - importacoes
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
//carregando o model tarefas
require("../models/tarefas");
const Tarefas = mongoose.model("tarefas");

//2 - Abre e carrega todas as informacoes no formulario tarefas.handlebars
router.get("/tarefas", (req, res) => {
    Tarefas.find().lean().then((tarefas) => {
        res.render("admin/tarefas/tarefas", { tarefas: tarefas });
    });
});

//3 - Rota para o formulario de cadastro de tarefas
router.get("/tarefas/add", (req, res) => {
    res.render("admin/tarefas/addtarefas");
});

//4 - Rota para salvar as tarefas no banco de dados
router.post("/tarefas/nova", (req, res) => {
    var tarefas = new Tarefas();
    tarefas.nome = req.body.nome;
    tarefas.descricao = req.body.descricao;
    tarefas.save().then(() => {
        res.redirect("/rota_tarefas/tarefas");
    }).catch((err) => {
        res.send("Houve um erro ao salvar a tarefa: " + err);
    });
});

//5 - Abre e preenche o formulario edittartarefas.handlebars com as informacoes do id
router.get("/tarefas/edit/:id", (req, res) => {
    Tarefas.findOne({ _id: req.params.id }).lean().then((tarefas) => {
        res.render("admin/tarefas/edittartarefas", { tarefas: tarefas });
    });
});

//6 - Recebe as informacoes editadas e atualiza no banco de dados.
router.post("/tarefas/editar_tarefas", (req, res) => {
    Tarefas.updateOne({ _id: req.body.id }, {
        $set: {
            nome: req.body.nome,
            descricao: req.body.descricao
        }
    }).then(() => {
        res.redirect("/rota_tarefas/tarefas");
    }).catch((err) => {
        res.send("Houve um erro ao editar a tarefa: " + err);
    });
}); 

// 7 - No form turma.handlebars, ao clicar no botao excluir, ele deleta a tarefa do banco de dados
router.post("/tarefas/deletar_tarefas/:id", (req, res) => {
    Tarefas.deleteMany({ _id: req.params.id }).then(() => {
        res.redirect("/rota_tarefas/tarefas");
    }).catch((err) => {
        res.send("Houve um erro ao deletar a tarefa: " + err);
    });
});

//8 - exportando o router
module.exports = router;
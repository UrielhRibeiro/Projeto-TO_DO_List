//Rotas para a tarefa
import express from 'express';
const router = express.Router();
const tarefaController = require('../Controllers/tarefaController')

//api/tarefas
router.post('/',tarefaController.CriarTarefa) //Rota para criar uma tarefa
router.get('/',tarefaController.ListarTarefas)// Rota para Listar tarefas
router.put('/:id',tarefaController.AlterarTarefas)// Rota para alterar uma tarefa
router.get('/:id',tarefaController.BuscaTarefas) // Rota para buscar uma tarefa
router.delete('/:id',tarefaController.ExcluirTarefas)// Rota para excluir uma tarefa

module.exports = router;
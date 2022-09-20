import express,{Request,Response} from 'express';
const _Tarefa = require('../models/Tarefa')

//Criar Tarefa

exports.CriarTarefa = async (req: Request, res:Response) =>{
    
    try {
        let tarefa;

        //Criando tarefa
        tarefa = new _Tarefa(req.body);
        await tarefa.save();
        res.send(tarefa);
       
    } catch (error) {
        console.log(error);
        res.status(500).send('Houve um erro ao criar uma tarefa')   
    }
}

//Listar Tarefas

exports.ListarTarefas = async(req: Request, res:Response) =>{
    try {
        const tarefas = await _Tarefa.find();
        res.json(tarefas)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Houve um erro ao obter uma tarefa')    
    }
}

// Alterar Tarefas

exports.AlterarTarefas = async(req:Request, res:Response) =>{

    try {
        const{Nome_Tarefa,Prioridade_Tarefa} = req.body;
        let tarefa = await _Tarefa.findById(req.params.id);

        if(!tarefa){
            res.status(404).json({msg:'Não existe a tarefa'})
        }

        tarefa.Nome_Tarefa = Nome_Tarefa;
        tarefa.Prioridade_Tarefa = Prioridade_Tarefa;

        tarefa =  await _Tarefa.findOneAndUpdate({_id: req.params.id}, tarefa, {new: true})
        res.json(tarefa);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Houve um erro ao alterar uma tarefa')      
    }
}

// Buscar uma tarefa 

exports.BuscaTarefas = async(req:Request, res:Response) =>{

    try {
     
        let tarefa = await _Tarefa.findById(req.params.id);

        if(!tarefa){
            res.status(404).json({msg:'Não existe a tarefa'})
        }

        res.json(tarefa);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Houve um erro ao excluir uma tarefa')      
    }

}

//Excluir tarefas

exports.ExcluirTarefas = async(req:Request, res:Response) =>{

    try {
     
        let tarefa = await _Tarefa.findById(req.params.id);

        if(!tarefa){
            res.status(404).json({msg:'Não existe a tarefa'})
        }
        await _Tarefa.findOneAndRemove({_id: req.params.id})
        res.json({msg:'Tarefa eliminada com sucesso!'});
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Houve um erro ao excluir uma tarefa')      
    }

}
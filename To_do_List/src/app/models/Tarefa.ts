export class Tarefa{
    _id?: number;
    Nome_Tarefa:string;
    Prioridade_Tarefa: string;
    
    constructor(nome_tarefa:string, prioridade_tarefa:string){
        this.Nome_Tarefa = nome_tarefa;
        this.Prioridade_Tarefa = prioridade_tarefa;

    }
}
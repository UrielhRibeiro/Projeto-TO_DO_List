const mongoose = require("mongoose");

// Definindo variáveis para uso no banco
const TarefaSchema = mongoose.Schema({
    Nome_Tarefa:{
        type:String,
        require:true
    },

    Prioridade_Tarefa:{
        type:String,
        require:true
    },

    fechaCriacao:{
        type:Date,
        default: Date.now()
    }
});


module.exports = mongoose.model('Tarefa',TarefaSchema);
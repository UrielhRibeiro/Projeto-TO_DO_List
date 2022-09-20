import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; //Cors importada para fazer requisições http externas

//Conectando o servidor
const app = express();


//Conectando o bando de dados
mongoose.connect('mongodb+srv://Uriel:clarinete23k@cluster0.6dh3s0g.mongodb.net/Tarefa_db').then(()=>{
        console.log("Banco de dados conectado!");
    })

app.use(cors());

app.use(express.json());

app.use('/api/tarefas',require('./routes/Tarefa')) //Utilizando a rota api/tarefas

//Conectando o servidor
app.listen(8080,()=>{

    console.log("O servidor está funcionando!");

}) 

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Tarefa } from 'src/app/models/Tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {
    listTarefas: Tarefa[] = [];

  constructor(private _tarefaService: TarefaService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.ListarTarefas();
  }

  ListarTarefas(){
    this._tarefaService.getTarefas().subscribe(data=>{
        console.log(data);
        this.listTarefas = data;
    }, error =>{
        console.log(error);
    })
  }

  excluirTarefa(id: any){
    this._tarefaService.excluirTarefa(id).subscribe(data=>{
      this.toastr.error('A tarefa foi excluida com sucesso','Tarefa excluida!');
      this.ListarTarefas();
    }, error=>{
      console.log(error)
    })

  }

}

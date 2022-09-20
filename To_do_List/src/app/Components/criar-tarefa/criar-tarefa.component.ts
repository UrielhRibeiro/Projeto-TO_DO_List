import { Component, OnInit } from '@angular/core';
import  {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Tarefa} from 'src/app/models/Tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.component.html',
  styleUrls: ['./criar-tarefa.component.css']
})
export class CriarTarefaComponent implements OnInit {
  TarefaForm: FormGroup;
  titulo = 'Criar tarefa';
  id: string | null;

  constructor(private fb: FormBuilder, private router: Router,private toastr: ToastrService, private _tarefaService: TarefaService, private aRouter: ActivatedRoute) {
    this.TarefaForm = this.fb.group({
      Nome_Tarefa: ['', Validators.required],
      Prioridade_Tarefa: ['', Validators.required]
    })

    this.id = this.aRouter.snapshot.paramMap.get('id');

   }

  ngOnInit(): void {
    this.EditarTarefa()

  }

  AgregrarTarefa(){
    
    const TAREFA: Tarefa = {
      Nome_Tarefa: this.TarefaForm.get('Nome_Tarefa')?.value,
      Prioridade_Tarefa: this.TarefaForm.get('Prioridade_Tarefa')?.value
    }

    if(this.id !== null){
      //Editando tarefa
        this._tarefaService.AlterarTarefa(this.id,TAREFA).subscribe(data=>{
        this.toastr.info('Tarefa atualizada com sucesso!', 'Tarefa alterada!');
        this.router.navigate(['/']);

      },error=>{
        console.log(error);
        this.TarefaForm.reset();
       })  

    }else{
      //Agregrando tarefa
      console.log(TAREFA)
        this._tarefaService.GuardarTarefa(TAREFA).subscribe(data=>{

        this.toastr.success('Tarefa criada com sucesso!', 'Tarefa registrada!');
        this.router.navigate(['/']);
  
        },error=>{
        console.log(error);
        this.TarefaForm.reset();
       })  
     }
  }

//Atualizando os valores 
  
  EditarTarefa(){
    if(this.id !== null){
      this.titulo = 'Editar Tarefa';
      this._tarefaService.ObterTarefa(this.id).subscribe(data=>{
      this.TarefaForm.setValue({
          Nome_Tarefa: data.Nome_Tarefa,
          Prioridade_Tarefa: data.Prioridade_Tarefa

        })
      })
    }
  }
}

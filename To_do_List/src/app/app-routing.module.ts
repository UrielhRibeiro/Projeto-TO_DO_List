import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarTarefaComponent } from './Components/criar-tarefa/criar-tarefa.component';
import { ListarTarefaComponent } from './Components/listar-tarefa/listar-tarefa.component';

const routes: Routes = [
  {path: '', component: ListarTarefaComponent},
  {path: 'criar-tarefa',component: CriarTarefaComponent},
  {path: 'editar-tarefa/:id',component: CriarTarefaComponent},
  {path: '**', redirectTo: '', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

//Componentes
import { AppComponent } from './app.component';
import { CriarTarefaComponent } from './Components/criar-tarefa/criar-tarefa.component';
import { ListarTarefaComponent } from './Components/listar-tarefa/listar-tarefa.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarTarefaComponent,
    ListarTarefaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

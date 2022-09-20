import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService { // conexão com o servidor - Integração front e back
url = 'http://localhost:8080/api/tarefas/';
  constructor(private http: HttpClient) { }

  getTarefas(): Observable<any>{ //retornado as tarefas existentes
     return this.http.get(this.url);
  }

  excluirTarefa(id:string):Observable <any>{ //Excluindo as tarefas existentes
     return this.http.delete(this.url + id);
  }

  GuardarTarefa(tarefa: Tarefa): Observable <any>{ // Salvando uma tarefa após o cadastro
    return this.http.post(this.url, tarefa);
  }

  ObterTarefa(id: string): Observable <any>{ //Buscando uma tarefa
    return this.http.get(this.url + id);
  }

  AlterarTarefa(id: string, tarefa: Tarefa): Observable <any>{ //Alterando uma tarefa
    return this.http.put(this.url + id,tarefa);
  }

}

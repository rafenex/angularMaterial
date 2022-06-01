import { Curso } from './../model/curso';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
  //a instancia vai ser provida na raiz do projeto, mesmo assim precisa importar
})
export class CursosService {

  private readonly API = '/assets/cursos.json';

  constructor(private httpClient: HttpClient) { }
  // esse http client vai ser fornecido automaticamente ao fazer a declaração no construtor
  // injeção de dependencia
  listar() {
    return this.httpClient.get<Curso[]>(this.API)
      .pipe(
        first(),//finaliza a conexao depois do primeiro
        delay(5000),
        tap(cursosLista => console.log(cursosLista))
      );
  }
}

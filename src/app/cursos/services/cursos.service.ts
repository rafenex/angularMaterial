import { Curso } from './../model/curso';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
  //a instancia vai ser provida na raiz do projeto, mesmo assim precisa importar
})
export class CursosService {

  constructor(private httpClient: HttpClient) { }
  // esse http client vai ser fornecido automaticamente ao fazer a declaração no construtor
  // injeção de dependencia
  listar(): Curso[] {
    return [
      { _id: "1", nome: 'Angular', categoria: 'Front-end' }
    ];
  }
}

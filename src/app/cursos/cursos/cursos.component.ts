import { CursosService } from './../services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursosLista: Curso[] = [
    { _id: "1", nome: 'Angular', categoria: 'Front-end' }
  ];
  displayedColumns = ['nome', 'categoria'];




  constructor(private CursosService: CursosService) {
    this.cursosLista = this.CursosService.listar();
  }

  ngOnInit(): void {
  }

}

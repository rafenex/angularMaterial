import { CursosService } from './../services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursosLista$: Observable<Curso[]> = this.CursosService.listar();
  displayedColumns = ['nome', 'categoria'];




  constructor(private CursosService: CursosService) {
    //this.cursosLista$ = this.CursosService.listar();
  }

  ngOnInit(): void {
  }

}

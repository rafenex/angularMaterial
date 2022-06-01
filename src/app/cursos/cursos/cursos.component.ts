import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CursosService } from './../services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursosLista$: Observable<Curso[]>;
  displayedColumns = ['nome', 'categoria'];




  constructor(
    private CursosService: CursosService,
    public dialog: MatDialog) {
    this.cursosLista$ = this.CursosService.listar()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar cursos')
          return of([])
        })
      );
  }

  ngOnInit(): void {
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg

    });
  }
}

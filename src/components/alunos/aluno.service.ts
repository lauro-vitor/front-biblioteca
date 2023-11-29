
import { Injectable } from '@angular/core';
import { Config } from '../../config';
import { Aluno } from './interfaces/aluno';
import { Observable, catchError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Pagination } from "../../model/Pagination";

import { Erro } from '../../model/erro';
import Swal from 'sweetalert2';
import { LoadingService } from '../../services/loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private httpClient: HttpClient, private loadingService: LoadingService) { }

  public obter(): Observable<Pagination<Aluno[]>> {
    return this.httpClient
      .get<Pagination<Aluno[]>>(`${Config.urlBase}/aluno`)
      .pipe(catchError(err => this.tratarError(err)));
  }

  public salvar(aluno: Aluno): Observable<Aluno> {

    if (aluno.idAluno == null)
      return this.httpClient
        .post<Aluno>(`${Config.urlBase}/aluno`, aluno)
        .pipe(catchError((err) => this.tratarError(err)));

    return this.httpClient
      .put<Aluno>(`${Config.urlBase}/aluno`, aluno)
      .pipe(catchError((err) => this.tratarError(err)));
  }


  private tratarError(err: HttpErrorResponse): Observable<any> {

    const erro = err.error as Erro;

    if (erro) {
      Swal.fire({
        title: erro.mensagem,
        text: erro.erros.mensagem,
        icon: "error"
      });
    }

    const continueResult = new Observable<any>(observer => {
      observer.complete();
      this.loadingService.remover();
    });

    return continueResult;
  }

}

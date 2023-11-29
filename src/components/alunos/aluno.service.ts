
import { Injectable } from '@angular/core';
import { Config } from '../../config';
import { Aluno } from './interfaces/aluno';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pagination } from "../../model/Pagination";

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private httpClient: HttpClient) { }

  public obter(): Observable<Pagination<Aluno[]>> {
    return this.httpClient.get<Pagination<Aluno[]>>(`${Config.urlBase}/aluno`);
  }

  public salvar(aluno: Aluno): Observable<Aluno> {

    if (aluno.idAluno == null)
      return this.httpClient.post<Aluno>(`${Config.urlBase}/aluno`, aluno);

    return this.httpClient.put<Aluno>(`${Config.urlBase}/aluno`, aluno);
  }
}

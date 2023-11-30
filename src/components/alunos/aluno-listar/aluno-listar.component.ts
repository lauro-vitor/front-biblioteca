import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';

import { AlunoService } from '../aluno.service';
import { Aluno } from '../interfaces/aluno';
import { Pagination } from '../../../model/Pagination';

import { AlunoParametro } from '../interfaces/aluno-parametro';
import { Router } from '@angular/router';
import { LoadingService } from '../../../services/loading/loading.service';

@Component({
  selector: 'app-aluno-listar',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  templateUrl: './aluno-listar.component.html',
  styleUrl: './aluno-listar.component.css'
})
export class AlunoListarComponent implements OnInit, AfterViewInit, OnDestroy {

  private alunoParametro?: AlunoParametro;

  private obterAlunosSubscription?: Subscription

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  @ViewChild(MatSort) sort?: MatSort;

  public displayedColumns: string[] = [
    "#",
    "nome",
    "matricula",
    "dataNascimento",
    "sexo",
    "habilitado"
  ];

  public dataSource: MatTableDataSource<Aluno> = new MatTableDataSource<Aluno>();;

  public idAlunoSelecionado?: string;

  public pageIndex?: number;
  public totalCount?: number;
  public pageSize?: number;

  constructor(
    private alunoService: AlunoService,
    private loadingService: LoadingService,
    private router: Router) { }


  ngOnInit(): void {
    this.obterAlunos();
  }

  ngAfterViewInit(): void {
    if (this.paginator == null || this.sort == null)
      return;

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.obterAlunosSubscription?.unsubscribe();
  }

  public handlePageEvent(event: PageEvent) {
    console.log('(chamar a api e mandar paginar) page event = ', event);
  }

  public sortChange(sort: any): void {
    const sortProp = sort.active;
    const sortDirection = sort.direction;
    console.log('sort change working = ', sortProp, sortDirection);
  }

  public inserirButtonClick(): void {
    this.router.navigate(['/aluno-cadastro']);
  }

  public editarButtonClick(): void {
    
  }

  public excluirButtonClick(): void {

  }

  public selecionarAlunoInputClick(idAluno: string) {
    this.idAlunoSelecionado = idAluno;
  }

  private obterAlunos(): void {
    this.loadingService.inserir();

    this.obterAlunosSubscription = this.alunoService.obter().subscribe({
      next: (response: Pagination<Aluno[]>) => {
        this.pageIndex = response.pageIndex;
        this.pageSize = response.pageSize;
        this.totalCount = response.totalCount;
        this.dataSource = new MatTableDataSource<Aluno>(response.data);
        this.loadingService.remover();
      },
    });
  }

  // private obterIdAlunoSelected(): string | null {

  //   const inputAlunoSelected: HTMLInputElement | null = document.querySelector("[name=alunoSelecionado]:checked");

  //   if (!inputAlunoSelected)
  //     return null;

  //   return inputAlunoSelected.value;
  // }




}

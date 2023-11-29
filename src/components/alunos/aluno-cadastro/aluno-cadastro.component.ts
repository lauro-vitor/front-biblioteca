import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from "@angular/forms";
import { Subscription } from 'rxjs';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { Aluno } from '../interfaces/aluno';
import { AlunoService } from '../aluno.service';
import { LoadingService } from '../../../services/loading/loading.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-aluno-cadastro',
  standalone: true,
  templateUrl: './aluno-cadastro.component.html',
  styleUrl: './aluno-cadastro.component.css',

  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class AlunoCadastroComponent implements OnDestroy {

  httpSubscription?: Subscription;

  alunoForm: FormGroup;

  constructor(private alunoService: AlunoService, private loadingService: LoadingService) {

    this.alunoForm = new FormGroup({
      nome: new FormControl(''),
      matricula: new FormControl(''),
      dataNascimento: new FormControl(''),
      sexo: new FormControl('-1')
    });

  }

  submit(): void {

    this.loadingService.inserir();

    const aluno: Aluno = {
      nome: this.alunoForm.get('nome')?.value,
      matricula: this.alunoForm.get('matricula')?.value,
      dataNascimento: this.alunoForm.get('dataNascimento')?.value,
      sexo: this.alunoForm.get('sexo')?.value,
    };

    this.httpSubscription = this.alunoService
      .salvar(aluno)
      .subscribe((result: Aluno) => {
        Swal.fire({
          title: "Ok",
          text: "Aluno registrado com sucesso",
          icon: "success"
        });
      });
  }

  ngOnDestroy(): void {
    this.httpSubscription?.unsubscribe();
  }
}

import { Routes } from '@angular/router';
import { MenuComponent } from '../components/menu/menu.component';
import { AlunoListarComponent } from '../components/alunos/aluno-listar/aluno-listar.component';
import { AlunoCadastroComponent } from '../components/alunos/aluno-cadastro/aluno-cadastro.component';

export const routes: Routes = [
    { path: '', component: MenuComponent },
    { path: 'aluno-listar', component: AlunoListarComponent },
    { path: 'aluno-cadastro', component: AlunoCadastroComponent }
];

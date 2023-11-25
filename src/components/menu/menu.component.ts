import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu } from './interfaces/menu';
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  public menus: Array<Menu>;

  constructor(private router: Router) {

    this.menus = [
      {
        nome: "Alunos",
        icone: "school",
        rota: "/aluno-listar"
      } as Menu,
      {
        nome: "Empréstimos",
        icone: "transfer_within_a_station",
        rota: "/emprestimos"
      } as Menu,
      {
        nome: "Livros",
        icone: "library_books",
        rota: "/livros"
      } as Menu,
      {
        nome: "Autores",
        icone: "person",
        rota: "/autores"
      } as Menu,
      {
        nome: "Genêros",
        icone: "book",
        rota: "/generos"
      }
    ];
  }

  public navegar(rota: string){
    this.router.navigate([rota]);
  }
}

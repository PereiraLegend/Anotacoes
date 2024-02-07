import { Component } from '@angular/core';
import "../app.component"
import { Menu } from '../menu'


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
    readonly baseUrl = 'https://angular.dev/assets/tutorials/common';
  Menu: Menu = {
    id: 9999,
    nome: 'Ana',
    email: 'a@gmail.com'
  };
}

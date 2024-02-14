import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./components/menu/menu.component" // Aqui eu chamo o export do componente que eu criei e que quero usar nessa página
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent, ParentDataComponent, DirectivesComponent, IfRenderComponent], // Aqui eu chamo a função
  templateUrl: './app.component.html',
  //template: ` <h2>Teste</h2> `, // Ao invés de chamar apenas a url eu posso chamar diretamente o escopo do site por aqui;
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto1-angular';

  usuario = 'Ana' // Estou compartilhando esses dados
  dados = {
    email: 'ana@gmail.com',
    acesso: 'administrador',
  }
}

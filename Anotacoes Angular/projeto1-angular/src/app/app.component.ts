import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./components/menu/menu.component" // Aqui eu chamo o export do componente que eu criei e que quero usar nessa página
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { Rota1Component } from './components/rota1/rota1.component';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent, ParentDataComponent, DirectivesComponent, IfRenderComponent, EventosComponent, EmitterComponent, ListRenderComponent, PipesComponent, TwoWayBindingComponent, FormsModule, Rota1Component,HttpClientModule], // Aqui eu chamo a função
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

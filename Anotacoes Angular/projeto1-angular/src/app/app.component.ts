import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  //template: ` <h2>Teste</h2> `, // Ao invés de chamar apenas a url eu posso chamar diretamente o escopo do site por aqui;
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto1-angular';
}

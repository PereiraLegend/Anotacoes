import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  standalone: true,
  imports: [],
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css'
})
export class ParentDataComponent {
  @Input() name: string = '' // Aqui estou passando o dados para que ele apareça na tela
  @Input() dados!: { email: string, acesso: string } // Aqui faço o mesmo com o objeto, no caso adiciono o "!" pois ele indica que eu iniciei a variável
}

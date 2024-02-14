import { Component } from '@angular/core';

@Component({
  selector: 'app-if-render',
  standalone: true,
  imports: [],
  templateUrl: './if-render.component.html',
  styleUrl: './if-render.component.css'
})
export class IfRenderComponent {
  render: boolean = true

}

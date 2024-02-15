import { Component } from '@angular/core';
import { ChangeNumberComponent } from '../change-number/change-number.component';

@Component({
  selector: 'app-emitter',
  standalone: true,
  imports: [ChangeNumberComponent], //Aqui eu chamo o change number
  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.css'
})
export class EmitterComponent {
  myNumber: number = 0

  onChangeNumber(){
    console.log("Deu certo!!!, o Número foi trocado")
    this.myNumber = 1 // Aqui eu troco o número 0 pelo número 1
  }
}

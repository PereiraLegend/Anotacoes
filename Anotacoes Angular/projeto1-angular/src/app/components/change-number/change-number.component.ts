import { Component, OnInit, Output, EventEmitter } from '@angular/core'; // Para controlar a emissão de evento eu chamo o Output e o EventEmitter

@Component({
  selector: 'app-change-number',
  standalone: true,
  imports: [],
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.css'
})
export class ChangeNumberComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter() //Basicamente aqui crio um evento
  handleClick(){
    this.changeNumber.emit()// Aqui eu emito um evento
    alert("O botão alterar número foi clicado")
  }
}

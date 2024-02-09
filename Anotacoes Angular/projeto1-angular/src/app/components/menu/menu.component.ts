import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit { // Importo o OnInit e o implemento aqui para chamar a inferência no Html
  name: string = 'Lucas' // Aqui eu criou uma inferência
  age: number = 10
  profissao: string = 'Programador'


  ngOnInit(): void {

  }
}

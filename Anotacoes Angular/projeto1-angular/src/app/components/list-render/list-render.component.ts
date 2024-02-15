import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { Animal } from '../../Animal'; // aqui eu importo a interface que eu criei

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals: Animal[]= [ // Aqui eu chamo a interface
    {name: 'Tom', type: 'Gato', age: 1},
    {name: 'Jerry', type: 'Rato', age: 2},
    {name: 'Bull', type: 'Cão', age: 3},
    {name: 'Paconha', type: 'Peixe', age: 4}
  ]
  animalDetails = ''
  showAge(animal: Animal) { // Aqui dentro dos parênteses digo que quero puxar algo que esteja alinhando com a interface que foi criada
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }
}

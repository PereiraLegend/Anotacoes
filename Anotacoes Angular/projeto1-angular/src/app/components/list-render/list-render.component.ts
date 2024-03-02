import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { Animal } from '../../Animal'; // aqui eu importo a interface que eu criei
import { ProdutosService } from '../../services/produtos.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent implements OnInit {
  /*
  animals: Animal[]= [ // Aqui eu chamo a interface
    {name: 'Tom', type: 'Gato', age: 1},
    {name: 'Jerry', type: 'Rato', age: 2},
    {name: 'Bull', type: 'Cão', age: 3},
    {name: 'Paconha', type: 'Peixe', age: 4}
  ]
  */

  animals: any[] = []
  //animalDetails = ''
  /*
  constructor(private produtosService: ProdutosService) {
    this.getAnimals()
  } // Aqui o angular vai entender que eu estou criando um novo serviço no caso o ProdutosService que estou importando // utilizo o p de produtos minusculo para dar nome a uma classe que stá chamando a função de outro arquivo
  showAge(animal: Animal): void { // Aqui dentro dos parênteses digo que quero puxar algo que esteja alinhando com a interface que foi criada
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }

  removeAnimal(animal: Animal) {
    console.log("Animal Removido...!")
    this.animals = this.produtosService.remove(this.animals, animal) //Aqui é aonde o meu service é chamado// O "this.animals =" é um mátodo de atribuição
  }

  getAnimals(): void {
    this.produtosService.getAll().subscribe((animals) => (this.animals = animals))
  }
  */
  constructor(private produtosservice: ProdutosService) {}

  ngOnInit(): void {
    this.produtosservice.getAnimals().subscribe((data) => {
      this.animals = data.animals2;
    }); 
  }
}

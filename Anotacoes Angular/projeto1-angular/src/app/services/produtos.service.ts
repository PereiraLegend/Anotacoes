import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ //Isso indica para o
  providedIn: 'root'
})
export class ProdutosService {
  private apiUrl = 'http://localhost:3000/animals'


  constructor(private http: HttpClient) { } // Como não tenho acesso direto ao observable na importação é necessário passar pelo constructor

  remove(animals: Animal[], animal:Animal) {
    console.log("Service Rodando")
    return animals.filter((a) => animal.name !== a.name)
  }

  getAll(): Observable<Animal[]> { //Aqui eu faço as chamadas para a Api
    return this.http.get<Animal[]>(this.apiUrl) // é necesesário que eu passe o animal no get do mesmo jeito que eu passo no observable, onde por padrão é necessário fazer isso para que o angular reconheça
  }
}

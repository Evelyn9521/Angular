import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

//los servicios son un Lugar centralizado donde nosotros vamos a tener la informacion
@Injectable() //Decorador 
export class DbzService{
  //con private no se puede manipular el objeto en ninguna otra parte del código, solo aquí en services
   private _personajes: Personaje[] = [
        {
          nombre:'Goku',
          poder:15000
        },
    
        {nombre:'Vegeta',
        poder:7500
        }
      ];

    get personajes(): Personaje[]{
      //los tres puntos son el operador spread, separa cada uno de los elementos del array y crea uno nuevo
      return [...this._personajes]
    }

    //injeccion de dependencia, estamos injectando el servicio en este constructor
  constructor(){}


  agregarPersonajes(personaje: Personaje){
    this._personajes.push(personaje)
  }
}
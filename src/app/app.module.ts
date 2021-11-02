/* La Aplicacion en general, lo que contiene nuestra aplicacion*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//modulos
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [ //se colocan los componentes individuales que no tienen modulos
    AppComponent,

    
   
  ],
  imports: [ //se colocan modulos agrupados entre sí
    BrowserModule,
    HeroesModule,  //modulo de heroes
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }






//para crear un proyecto:
// ng new nombre del proyecto
//para levantar servidor ng serve -o
//Para crear un componente automaticamente se utiliza el comando ng generate component nombre de la carpeta/nombre del componente
//crear un componente version simplificada ng g c nombre carpeta/ nombre componente
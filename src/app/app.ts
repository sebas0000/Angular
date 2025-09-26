import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { configuracion } from './models/configuracion'
import { VideoJuegoComponent } from './videojuegos/videojuegos.component';
import { TenisComponent } from './tenis/tenis.component';
import { PantalonesComponent } from './pantalones/pantalones';
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    VideoJuegoComponent,  
    TenisComponent,
    PantalonesComponent, 
    CommonModule
    ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  public title = 'Angular';
  public descripcion : string = ' Aplicacion de ejemplo'
  public mostrarVideojuegos: boolean = true;
  public calidad: string;

  constructor(){
    this.title  = configuracion.color;
    this.descripcion = configuracion.Medida
    this.calidad = configuracion.calidad
  }
  Togglevideojuegos(): void {
    this.mostrarVideojuegos = !this.mostrarVideojuegos;
  }
}


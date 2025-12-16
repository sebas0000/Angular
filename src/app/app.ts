import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { configuracion } from './models/configuracion'
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
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


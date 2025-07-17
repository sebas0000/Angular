import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅

import { VideoJuegoComponent } from './videojuegos/videojuegos.component';
import { TenisComponent } from './tenis/tenis.component';
import { Pantalones } from './pantalones/pantalones';
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [VideoJuegoComponent,TenisComponent, Pantalones,CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Angular');
  public mostrarVideojuegos: boolean = true;

  Togglevideojuegos(): void {
    this.mostrarVideojuegos = !this.mostrarVideojuegos;
  }
}

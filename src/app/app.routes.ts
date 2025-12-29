import { Routes } from '@angular/router';
import { TenisComponent } from './tenis/tenis.component';
import { PantalonesComponent } from './pantalones/pantalones';
import { VideoJuegoComponent } from './videojuegos/videojuegos.component';
import { Home } from './home/home';
import { Externo } from './externo/externo';
import { Contacto } from './contacto/contacto';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'tenis', component: TenisComponent },
  { path: 'pantalones', component: PantalonesComponent },
  { path: 'pantalones/:id', component: PantalonesComponent },
  { path: 'videojuegos', component: VideoJuegoComponent },
  { path: 'externo', component: Externo},
  { path: 'contacto', component: Contacto},
  { path: '**', component: Home }
];

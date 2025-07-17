import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
@Component({
    standalone: true,
    selector: 'tenis',
    templateUrl: './tenis.component.html',
    imports: [CommonModule]
})
export class TenisComponent {
  public marca = 'Marca X';
  public marcas = ['Nike', 'Adidas', 'Pumas'];
}
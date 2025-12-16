import { Component } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-externo',
  imports: [CommonModule],
  templateUrl: './externo.html',
  styleUrl: './externo.css',
})
export class Externo implements OnInit{

  public user:any;
  public mostrar:boolean = false;

  constructor(
    private peticionesService : PeticionesService
  ){}

  ngOnInit(){
    this.peticionesService.getUser().subscribe(
      result =>{
        this.user = result
        this.mostrar = true
      },
      error => {
        console.log(error)
      }
    )
  }
}

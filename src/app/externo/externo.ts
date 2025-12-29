import { Component } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { response } from 'express';
import { error } from 'console';
@Component({
  selector: 'app-externo',
  imports: [CommonModule,FormsModule],
  templateUrl: './externo.html',
  styleUrl: './externo.css',
})
export class Externo implements OnInit{

  public user:any;
  public mostrar:boolean = false;
  public new_user: any;
  public usuario_guardado: any


  constructor(
    private peticionesService : PeticionesService
  ){
    this.new_user = {
      "name": "sebastian",
      "email":"segok@gmail.com"
    }
  }

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
  onSubmit(form:any){
    this.peticionesService.addUser(this.new_user).subscribe(
      response => {
        this.usuario_guardado = response;
        console.log(response)
        form.reset();
      },
      error => {
        console.log(<any>error)
      }
    )
  }
}

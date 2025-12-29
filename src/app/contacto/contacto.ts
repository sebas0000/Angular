import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-contacto',
  imports: [FormsModule,CommonModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto implements OnInit {
  public usuario: Usuario;
  constructor(){
    this.usuario = new Usuario('','','','')
  }
  ngOnInit(): void {
    
  }

  onSubmit(form: any){
      form.reset();
      console.log(this.usuario);
  }

}

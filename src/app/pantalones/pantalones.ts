import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CalculadoraPipe } from '../pipes/calculadora.pipe';


@Component({
  selector: 'pantalones',
  imports: [CommonModule, CalculadoraPipe],
  templateUrl: './pantalones.html',
  standalone: true,
})
export class PantalonesComponent implements OnInit{
  public id : number = 0;
  public fecha: any;
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
  ){}
  ngOnInit(){
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('ID recibido:', this.id);
    this.fecha = new Date(2019,5,20)
  }
  redirect(){
    this.router.navigate(['/tenis'])
  }
}

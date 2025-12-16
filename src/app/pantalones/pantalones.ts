import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'pantalones',
  imports: [],
  templateUrl: './pantalones.html',
  standalone: true,
})
export class PantalonesComponent implements OnInit{
  public id : number = 0;
  constructor(
    private route: ActivatedRoute, 
    private router: Router
  ){}
  ngOnInit(){
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('ID recibido:', this.id);
  }
  redirect(){
    this.router.navigate(['/tenis'])
  }
}

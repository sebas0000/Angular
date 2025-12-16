import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Teni } from '../models/teni'
import { tenisService } from "../services/tenis.service";
@Component({
    standalone: true,
    selector: 'tenis',
    templateUrl: './tenis.component.html',
    imports: [CommonModule,FormsModule],
    providers: [tenisService]
})
export class TenisComponent  implements OnInit{
  public tienda = 'Tienda de todo tipo de cosas';
  public nombre:String  = '';
  public marca:String = '';
  public tenis: Array<Teni> = [];
  public envio: boolean = true;
  public marcas: String[] = [];
  constructor(private teniService : tenisService){
    
  }
  ngOnInit(): void {
      this.tenis = this.teniService.getTenis()
      this.getTallas()
  }
  getTallas():void{
    this.tenis.forEach((teni,index) =>{
      if(this.marcas.indexOf(teni.marca) < 0){
        this.marcas.push(teni.marca);
      }
    })
    console.log(this.marcas)
  }
  getMarca():void{
    alert(`Se guardo el nombre de: ${this.marca}`)
  }
  addMarca():void{
     this.marcas.push(this.marca);
  }
  deleteMarca(i:number):void{
    //delete this.marcas[i]
    this.marcas.splice(i,1)
  }
  onBlur():void{
    console.log('Salio del input')
  }
}
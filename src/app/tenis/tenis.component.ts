import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Teni } from '../models/teni'
@Component({
    standalone: true,
    selector: 'tenis',
    templateUrl: './tenis.component.html',
    imports: [CommonModule,FormsModule]
})
export class TenisComponent  implements OnInit{
  public tienda = 'Tienda de todo tipo de cosas';
  public nombre:String  = '';
  public marca:String = '';
  public tenis: Array<Teni>;
  public envio: boolean = true;
  public marcas: String[] = [];
  constructor(){
    this.tenis = [
      new Teni('Puma speed cat', 'Negro', 'Puma', 1800, 2),
      new Teni('Puma speed cat', 'Rojo', 'Puma', 1800, 0),
      new Teni('Adidas VL court', 'Blanco', 'Adidas', 1300, 10),
      new Teni('Adidas VL court', 'Negro', 'Adidas', 1400, 0),
      new Teni('Nike cortez', 'Rojo', 'Nike', 1700, 5),
      new Teni('Yeezy 320', 'Zebra', 'Adidas', 2300 , 1),
      new Teni('Reebok classics', 'Blanco', 'Reebok', 1200 , 7),
      new Teni('Assics X900', 'Plateado', 'Assics', 1600 , 0)
    ]
  }
  ngOnInit(): void {
      console.log(this.tenis)
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
import { Injectable } from "@angular/core";
import { Teni } from "../models/teni";

@Injectable({providedIn:"root"})
export class tenisService{
    public tenis: Array<Teni>
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
    getTenis():Array<Teni>{
        return this.tenis
    }
}
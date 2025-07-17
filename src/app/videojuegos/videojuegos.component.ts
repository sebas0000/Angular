import { Component,OnInit,DoCheck,OnDestroy } from "@angular/core";

@Component({
    standalone: true,  
    selector: 'app-videojuego',
    templateUrl: './videojuegos.component.html'
})
export class VideoJuegoComponent{
    public titulo: string;
    public listado: string;
    constructor(){
        this.titulo = 'Titulo secreto de videojuegos'
        this.listado = 'Listado de videojuegos'
    }
    ngOnInit():void{
        console.log('Se ejecuto el onInit')
    }
    ngDoCheck():void{
        console.log('Se ejecuto el doCheck')
    }
    ngOnDestroy():void{
        console.log('Se ejecuto el onDestroy')
    }
     mostrartitulo():void{
        alert(this.titulo = 'King Of Fighters')
    }
}
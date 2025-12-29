import { PipeTransform,Pipe } from "@angular/core";

@Pipe({name:"Calculadora"})
export class CalculadoraPipe implements PipeTransform{
    //dato | calculadora: otro dato
    transform(value1: any,value2:any) {
        let operaciones = `
            Suma: ${value1 + value2} - Resta: ${value1 - value2} - Multi: ${value1 * value2} - Divi: ${value1 / value2}
        `
        return operaciones
    }
} 
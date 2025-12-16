import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({providedIn:"root"})
export class PeticionesService{
    public url : string;
    
    constructor(
        public _http: HttpClient
    ){
        this.url = 'https://jsonplaceholder.typicode.com/'
    }
    getUser() : Observable<any> {
        return this._http.get(this.url+'users/2');
    }
}
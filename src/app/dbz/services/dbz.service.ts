import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";
import { AgregarComponent } from '../agregar/agregar.component';

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder:15000
        }, 
        {
          nombre: 'Krilin',
          poder: 3141
        }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {}

    agregarPersonaje( personaje: Personaje) {
        this._personajes.push( personaje );
    }



}
import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { jclientes } from './clientes.json';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  constructor() { }

  getClientes(): Observable<Cliente[]>{
    return of(jclientes);
  }

}

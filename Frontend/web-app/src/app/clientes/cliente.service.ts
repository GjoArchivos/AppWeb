import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { jclientes } from './clientes.json';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private miEndPoint: string = 'http://localhost:8081/api/clientes';

  constructor(private http: HttpClient) { }
  //estatico desde un archivo local
  //getClientes(): Observable<Cliente[]>{
  //  return of(jclientes);

  //de forma remota
  //getClientes(): Observable<Cliente[]>{
  //  return this.http.get<Cliente[]>(this.miEndPoint);

    //de forma remota con map
  getClientes(): Observable<Cliente[]>{
    return this.http.get(this.miEndPoint).pipe(
      map(response => response as Cliente[])
    );

  }

    
}

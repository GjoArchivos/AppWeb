import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { jclientes } from './clientes.json';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private miEndPoint: string = 'http://localhost:8081/api/clientes';
  private httpHeaders = new HttpHeaders({'content-Type': 'application/json'})

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
  CrearCliente(cliente:Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.miEndPoint, cliente, {headers: this.httpHeaders})
  }
  getCliente(id): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.miEndPoint}/${id}`)
  }
  actualizar(cliente:Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.miEndPoint}/${cliente.id}`,cliente, {headers: this.httpHeaders})
  }

  borrarCliente(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.miEndPoint}/${id}`, {headers: this.httpHeaders})
  }
  

}

import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})

export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService){

  }

ngOnInit(){
  //antes de poner el observasble
  this.clienteService.getClientes().subscribe(
    Clientes => this.clientes = Clientes 
  );
}

}

import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  protected cliente: Cliente = new Cliente()
  protected cardTitulo: string ='Nuevo Cliente';
  
  constructor(private clienteService: ClienteService, 
              private router: Router, 
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.cargarCliente()
  }

  public CrearCliente(): void {
    //console.log('click');
    //console.log(this.clientes);
    this.clienteService.CrearCliente(this.cliente).subscribe(
      response => {
        this.router.navigate(['/clientes'])
        Swal.fire('Nuevo Cliente', `clientes ${this.cliente.nombre} creado con exito!`, 'success')
      }
    )
  }

  public cargarCliente(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.clienteService.getCliente(id).subscribe( (cliente) => this.cliente = cliente)
      }
    })
  }

  public actualizaCliente(): void {
    this.clienteService.actualizar(this.cliente).subscribe(cliente => {
        this.router.navigate(['/clientes'])
        Swal.fire('Cliente Actualizado', `clientes ${cliente.nombre} actualizado con exito!`, 'success')
      })
  }

  
}

  

import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2';

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
  delete(cliente: Cliente): void{

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Estas seguro?',
      text: `Estas seguro de borrar al cliente ${cliente.nombre} ${cliente.apellido} de la base de datos?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '  Si, Eliminar  ',
      cancelButtonText: 'No, Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.borrarCliente(cliente.id).subscribe(
          response =>{
            this.clientes = this.clientes.filter(cli => cli != cliente)
        swalWithBootstrapButtons.fire(
          'Cliente Eliminado!',
          `cliente ${cliente.nombre} ${cliente.apellido} eliminado con exito`,
          'success'
        )}
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Accion Cancelada',
          `el cliente ${cliente.nombre} ${cliente.apellido} no se borro`,
          'error'
        )
      }
    })


  }
      

}

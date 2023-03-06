import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  protected cliente: Cliente = new Cliente()
  protected cardTitulo: string ='Nuevo Cliente';

  ngOnInit(): void {
    
  }
  public create(): void{
    console.log('click');
    console.log(this.cliente);
  }
}

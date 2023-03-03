import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {
  listaCurso: string[] = ['typescript','java','html','css'];

  habilitar: boolean= true;
  bMostrar: string = 'Ocultar';

setHabilitar(): void{
  this.habilitar = (this.habilitar==true)?false : true;

  if(this.habilitar == true){
    this.bMostrar = 'Ocultar';
  }else{
    this.bMostrar = 'Mostrar';
  }
}





  constructor(){

  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Dr Strange', 'Thor', 'Soldado de Invierno', 'Black Widow', 'Capitan América'];
  heroeBorrado: string = '';


  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.pop() || '';
  }

}

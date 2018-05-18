import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mostrandobusqueda: boolean = false;
  resultadoAleatorio: string = '';

  resultadosObtenidos: any[] = [];

  constructor(public navCtrl: NavController) {
    this.obtenerDatos();
    this.calcularAleatorio();
  }

  public calcularAleatorio(i = 0) {
    setTimeout(() => {
      const indice = Math.trunc(this.getRandomArbitrary(0, this.resultadosObtenidos.length-1));
      this.resultadoAleatorio = this.resultadosObtenidos[indice].Word;
      if (i<20) this.calcularAleatorio(i+1);
    }, 100);
  }

  public getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  public alternarBusqueda() {
    this.mostrandobusqueda = !this.mostrandobusqueda;
  }

  public obtenerDatos() {
    this.resultadosObtenidos = [{Word: 'Patata'},{Word: 'Mesa'},{Word: 'Sistemas'},{Word: 'Pizarra'},{Word: 'Informática'}];
  }

}

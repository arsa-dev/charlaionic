import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ApiqueryServiceProvider } from '../../providers/apiquery-service';
import { WordPage } from '../word/word';
import { GLOBAL } from '../../providers/global';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mostrandobusqueda: boolean = false;
  filterText: string = '';
  resultadoAleatorio: string = '';

  resultadosObtenidos: any[] = [];
  ultimosResultados: any[] = [];

  constructor(public navCtrl: NavController, private _ApiQuery: ApiqueryServiceProvider, public modalCtrl: ModalController) {
    this.obtenerDatos();
    this.calcularAleatorio();
  }

  public calcularAleatorio(i = 0) {
    setTimeout(() => {
      if (this.resultadosObtenidos.length!=0){
        const indice = Math.trunc(this.getRandomArbitrary(0, this.resultadosObtenidos.length-1));
        this.resultadoAleatorio = this.resultadosObtenidos[indice].Word;
        if (i<20) this.calcularAleatorio(i+1);
      }
      return;
    }, 100);
  }

  public getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  public abrirDefinicion(word) {
    let profileModal = this.modalCtrl.create(WordPage, { definition: word });
    profileModal.present();
    profileModal.onDidDismiss(() => {
      this.obtenerDatos();
    });
  }
  
  public abrirDefinicionEnPagina(word) {
    this.navCtrl.push(WordPage, { definition: word });
  }

  public alternarBusqueda() {
    this.mostrandobusqueda = !this.mostrandobusqueda;
    if (!this.mostrandobusqueda) this.filterText = "";
  }
  
  public getUltimasPalabras() {
    this.ultimosResultados = this.resultadosObtenidos.slice(0);
    return this.ultimosResultados.sort((a, b) => {
      return new Date(b.CreateDate).getTime() - new Date(a.CreateDate).getTime();
    }).slice(0, 5);
    // return this.resultadosObtenidos;
  }
  
  public getTodosResultadosFiltrados() {
    // this.resultadosFiltrados = this.resultadosObtenidos.slice(0);
    if (this.filterText!='') {
      return this.resultadosObtenidos.filter((p) => {
        return p.Word.includes(this.filterText);
      });
    } else {
      return this.resultadosObtenidos;
    }
  }

  public obtenerDatos() {
    this._ApiQuery.getDefinitions(GLOBAL.idDiccionario).subscribe((Response) => {
      console.log(Response);
      this.resultadosObtenidos = Response["Definitions/GetAllByDictionaryId"];
      this.calcularAleatorio();
    }, (error) => {
      console.log("Se ha producido un error: "+error);
    });
  }

}

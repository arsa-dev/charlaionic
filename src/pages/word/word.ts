import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { GLOBAL } from '../../providers/global';
import { ApiqueryServiceProvider } from '../../providers/apiquery-service';

@Component({
  selector: 'page-word',
  templateUrl: 'word.html',
})
export class WordPage {

  actualword: any = {Word: 'Definismo', Definition: 'El definomo'};
  global: any = {};

  constructor(public navCtrl: NavController, params: NavParams, private _apiQuery: ApiqueryServiceProvider, public toastCtrl: ToastController) {
    this.global = GLOBAL;
    this.actualword = params.get('definition');
    console.log('Definición: ', this.actualword);
  }

  public borrarDefinicion() {
    this._apiQuery.delWord({
      Id: this.global.idDiccionario,
      Pass: this.global.passDiccionario,
      Id_Word: this.actualword.Id
    }).subscribe((Response) => {
      const toast = this.toastCtrl.create({message: 'Se ha borrado correctamente', duration: 3000});

      toast.onDidDismiss(() => {
        this.cerrarModal();
      });

      toast.present();
    }, (error) => {
      console.log("Se ha producido un error", error);
      this.toastCtrl.create({message: 'Se ha producido un error, compruebe la contraseña', duration: 3000}).present();
    });

  }

  cerrarModal() {
    this.navCtrl.pop();
  }
  
}

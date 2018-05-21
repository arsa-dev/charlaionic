import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { GLOBAL } from '../../providers/global';
import { ApiqueryServiceProvider } from '../../providers/apiquery-service';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-addword',
  templateUrl: 'addword.html',
})
export class AddwordPage {

  word: any = {Word: '', Definition: ''};

  global: any = {};

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, private _apiQuery: ApiqueryServiceProvider) {
    this.global = GLOBAL;
  }
  

  public guardar() {
    this._apiQuery.addWord({
      Id: this.global.idDiccionario,
      Pass: this.global.passDiccionario,
      Word: this.word.Word,
	    Definition: this.word.Definition
    }).subscribe((Response) => {
      const toast = this.toastCtrl.create({message: 'Se ha añadido correctamente', duration: 3000});

      toast.onDidDismiss(() => {
        this.navCtrl.setRoot(HomePage);
      });

      toast.present();
    }, (error) => {
      console.log("Se ha producido un error", error);
      this.toastCtrl.create({message: 'Se ha producido un error, compruebe la contraseña', duration: 3000}).present();
    });
  }

}

import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController, TextInput } from 'ionic-angular';
import { GLOBAL } from '../../providers/global';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('idDiccionario') idDiccionario: TextInput;
  @ViewChild('passDiccionario') passDiccionario: TextInput;

  mostrandoContrasena: boolean = false;

  global: any = {};

  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {
    this.global = GLOBAL;
  }
  

  public guardar() {
    GLOBAL.idDiccionario = parseInt(this.idDiccionario.value);
    GLOBAL.passDiccionario = this.passDiccionario.value;

    localStorage.setItem('config', JSON.stringify(GLOBAL));

    this.toastCtrl.create({
      message: 'Cambios guardados',
      duration: 3000,
      position: 'bottom'
    }).present();
  }

}

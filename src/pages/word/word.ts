import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-word',
  templateUrl: 'word.html',
})
export class WordPage {

  actualword: any = {Word: 'Definismo', Definition: 'El definomo'};

  constructor(public navCtrl: NavController, params: NavParams) {
    this.actualword = params.get('definition');
    console.log('Definición: ', this.actualword);
  }

  cerrarModal() {
    this.navCtrl.pop();
  }
  
}

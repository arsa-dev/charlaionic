import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-word',
  templateUrl: 'word.html',
})
export class WordPage {

  actualword: any = {Word: 'Definismo', Definition: 'El definomo'};

  constructor(public navCtrl: NavController) {
  }

  
}

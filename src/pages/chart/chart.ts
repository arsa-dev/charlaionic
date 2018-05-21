import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];

  constructor(public navCtrl: NavController) {
    setInterval(() => {
      this.pieChartData = [Math.trunc(this.getRandomArbitrary(0, 500)), Math.trunc(this.getRandomArbitrary(0, 500)), Math.trunc(this.getRandomArbitrary(0, 500))]
    }, 2000);
  }

  public getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }


  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
  
}

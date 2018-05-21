import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WordPage } from '../pages/word/word';
import { HttpModule } from '@angular/http';
import { ApiqueryServiceProvider } from '../providers/apiquery-service';
import { LoginPage } from '../pages/login/login';
import { AddwordPage } from '../pages/addword/addword';
import { ChartsModule } from 'ng4-charts/ng4-charts';
import { ChartPage } from '../pages/chart/chart';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WordPage,
    LoginPage,
    AddwordPage,
    ChartPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ChartsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WordPage,
    LoginPage,
    AddwordPage,
    ChartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiqueryServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

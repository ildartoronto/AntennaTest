import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { SatelliteSelectionPage } from '../pages/satellite-selection/satellite-selection';
import { PointingInstructionsPage } from '../pages/pointing-instructions/pointing-instructions';
import { PointingPage } from '../pages/pointing/pointing';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    SatelliteSelectionPage,
    PointingInstructionsPage,
    PointingPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    SatelliteSelectionPage,
    PointingInstructionsPage,
    PointingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}

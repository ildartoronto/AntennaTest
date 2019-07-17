import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SatelliteSelectionPage } from '../satellite-selection/satellite-selection';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoSatelliteSelectionPage(){
    this.navCtrl.push(SatelliteSelectionPage);
  }

}

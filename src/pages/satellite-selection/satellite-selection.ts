import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PointingInstructionsPage } from '../pointing-instructions/pointing-instructions';

@Component({
  selector: 'page-satellite-selection',
  templateUrl: 'satellite-selection.html',
})
export class SatelliteSelectionPage {
  private isSearchingFinished = false;
  private deg90 = '90';
  private deg180 = '180';
  private deg270 = '270';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    setTimeout(() => { this.isSearchingFinished = true; }, 2000);
  }

  gotoPointingInstructionsPage(){
    this.navCtrl.push(PointingInstructionsPage);
  }
}

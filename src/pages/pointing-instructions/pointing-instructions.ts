import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { PointingPage } from '../pointing/pointing';

@Component({
  selector: 'page-pointing-instructions',
  templateUrl: 'pointing-instructions.html',
})
export class PointingInstructionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PointingInstructionsPage');
  }

  gotoPointingPage(){
    this.navCtrl.push(PointingPage);
  }
}

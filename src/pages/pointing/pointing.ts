import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pointing',
  templateUrl: 'pointing.html',
})
export class PointingPage {
  private isDisabled = true;
  private isRotationCompleted = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    setTimeout(() => { this.isRotationCompleted = true; }, 5000);
  }

  gotoWeDecideLater(){
    // we are still thinking...
  }

}

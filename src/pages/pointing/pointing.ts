import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pointing',
  templateUrl: 'pointing.html',
})
export class PointingPage {
  private isDisabled = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PointingPage');
  }

  gotoWeDecideLater(){
    // we are still thinkking...
  }

}

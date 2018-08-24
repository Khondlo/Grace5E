import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage {

  subitem = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.subitem = navParams.get('subitem')

  }

}

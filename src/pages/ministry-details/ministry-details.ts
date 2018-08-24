import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ministry-details',
  templateUrl: 'ministry-details.html',
})
export class MinistryDetailsPage {

  // Property used for Firebase database link
  subitems = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.subitems = navParams.get('subitems')

  }

}

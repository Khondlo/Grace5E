import { MinistryDetailsPage } from './../ministry-details/ministry-details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ministries',
  templateUrl: 'ministries.html',
})
export class MinistriesPage {

  subitem = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.subitem = navParams.get('subitem')
  
  }

  ministry($event, subitems) {
    this.navCtrl.push(MinistryDetailsPage, {subitems: subitems});
  }

}

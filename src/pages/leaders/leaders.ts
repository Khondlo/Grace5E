import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-leaders',
  templateUrl: 'leaders.html',
})
export class LeadersPage {

  subitem = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.subitem = navParams.get('subitem')
  
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-connect',
  templateUrl: 'connect.html',
})
export class ConnectPage {

  subitem = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.subitem = navParams.get('subitem')
  
  }

}

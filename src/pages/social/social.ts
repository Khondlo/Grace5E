import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-social',
  templateUrl: 'social.html',
})
export class SocialPage {

  subitem = []; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.subitem = navParams.get('subitem')
  
  }

}

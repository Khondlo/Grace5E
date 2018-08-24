import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-location-map',
  templateUrl: 'location-map.html',
})
export class LocationMapPage {

  // Property used for Firebase database link
  subitems = [];

  private convertStringToNumber(value: string): number {
    return +value;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  
    this.subitems = navParams.get('subitems')
  
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}

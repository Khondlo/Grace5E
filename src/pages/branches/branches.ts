import { LocationMapPage } from './../location-map/location-map';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-branches',
  templateUrl: 'branches.html',
})
export class BranchesPage {

  subitem = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  
    this.subitem = navParams.get('subitem')
  
  }

  // modal controller configuration for location maps
  locationMap($event, subitems) {
    let modal = this.modalCtrl.create(LocationMapPage, {subitems: subitems});
    modal.present();
  }

}

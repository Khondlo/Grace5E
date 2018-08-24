import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from '@ionic-native/firebase';

@IonicPage()
@Component({
  selector: 'page-episode',
  templateUrl: 'episode.html',
})
export class EpisodePage {

  subitem = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.subitem = navParams.get('subitem')
  
  }

}

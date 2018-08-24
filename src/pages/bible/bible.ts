import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from '@ionic-native/firebase';

@Component({
  selector: 'page-bible',
  templateUrl: 'bible.html'
})
export class BiblePage {

  bible = [];

  constructor(public navCtrl: NavController) {

    firebase.database().ref('bible').on('value', snapshot => {
      this.bible = snapshot.val();
    });

  }

}

import { EventDetailsPage } from './../event-details/event-details';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from '@ionic-native/firebase';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  events = [];

  constructor(public navCtrl: NavController) {
    
    firebase.database().ref('events').on('value', snapshot => {
      this.events = snapshot.val();
    });
  
  }

  event($event, item) {
    this.navCtrl.push(EventDetailsPage, {item: item});
  }

}

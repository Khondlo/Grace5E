import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {

  public item;
  
  

  private convertStringToNumber(value: string): number {
    return +value;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private calendar: Calendar) {

    this.item = navParams.get('item')

    this.item.startDate = new Date(this.item.startDate);
    this.item.endDate = new Date(this.item.endDate);

  }
  
  
  createEvent() {
    this.calendar.createEventInteractively(
      this.item.title,
      this.item.eventLocation,
      this.item.notes,
      this.item.startDate,
      this.item.endDate,
    ).
      then(() => {
      console.log('Event Created!');
    })
      .catch((err) => {
      console.log('Oops, something went wrong:', err);
    });
  }

}

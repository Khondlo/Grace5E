import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';

import { SeriesPage } from './../series/series';

@Component({
  selector: 'page-sermons',
  templateUrl: 'sermons.html'
})
export class SermonsPage {

  sermons = [];

  constructor(public navCtrl: NavController) {
    
    firebase.database().ref('sermons').on('value', snapshot => {
      this.sermons = snapshot.val();
    });

//     firebase.database().ref('sermons').on('value', snapshot => {
//       snapshot.forEach(element =>{
//         this.sermons.push({
//           photo: element.val(),
//       loaded: false
//     })
//   });
// });

// firebase.database().ref('sermons').on('value', snapshot => {
//   for(let key in snapshot.val()){
//     firebase.database().ref('sermons/' + key + '/loaded').set(false);
//   }
// });
  
  
  }

  series($event, item) {
    this.navCtrl.push(SeriesPage, {item: item});
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-news-article',
  templateUrl: 'news-article.html',
})
export class NewsArticlePage {

  public item;

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing) {

    this.item = navParams.get('item')

  }

  share() {
    this.socialSharing.share(
      this.item.shareMessage, 
      this.item.shareSubject, 
      this.item.shareImage, 
      this.item.shareLink, 
    ).
      then(() => {
      console.log('Shared!');
    }).catch((err) => {
      console.log('Oops, something went wrong:', err);
    });
  }

}

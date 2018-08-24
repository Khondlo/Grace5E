import { NewsArticlePage } from './../news-article/news-article';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  news = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    firebase.database().ref('news').on('value', snapshot => {
      this.news = snapshot.val();
    });

  }

  newsArticle($event, item) {
    this.navCtrl.push(NewsArticlePage, {item: item});
  }

}

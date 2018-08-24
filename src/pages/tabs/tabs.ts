import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { EventsPage } from '../events/events';
import { BiblePage } from '../bible/bible';
import { SermonsPage } from '../sermons/sermons';
import { NewsPage } from '../news/news';
import { MorePage } from '../more/more';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  index = this.navParams.get('index')
  tab1Root = SermonsPage;
  tab2Root = EventsPage;
  tab3Root = BiblePage;
  tab4Root = NewsPage;
  tab5Root = MorePage;

  constructor(public navParams: NavParams) {

  }
}

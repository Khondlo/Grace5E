import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { VideosPipe } from './../pipes/videos/videos';
import { HttpModule } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Calendar } from '@ionic-native/calendar';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ThreeDeeTouch, ThreeDeeTouchQuickAction, ThreeDeeTouchForceTouch } from '@ionic-native/three-dee-touch';

import { EventsPage } from '../pages/events/events';
import { BiblePage } from '../pages/bible/bible';
import { SermonsPage } from '../pages/sermons/sermons';
import { NewsPage } from '../pages/news/news';
import { MorePage } from '../pages/more/more';
import { TabsPage } from '../pages/tabs/tabs';
import { SeriesPage } from '../pages/series/series';
import { EpisodePage } from '../pages/episode/episode';
import { EventDetailsPage } from '../pages/event-details/event-details';
import { NewsArticlePage } from '../pages/news-article/news-article';
import { SocialPage } from './../pages/social/social';
import { MusicPage } from './../pages/music/music';
import { TithingPage } from './../pages/tithing/tithing';
import { ConnectPage } from './../pages/connect/connect';
import { MinistriesPage } from './../pages/ministries/ministries';
import { LeadersPage } from './../pages/leaders/leaders';
import { BranchesPage } from './../pages/branches/branches';
import { AboutUsPage } from './../pages/about-us/about-us';
import { MinistryDetailsPage } from './../pages/ministry-details/ministry-details';
import { LocationMapPage } from './../pages/location-map/location-map';
import { AgmCoreModule } from '@agm/core';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Firebase } from '@ionic-native/firebase';

@NgModule({
  declarations: [
    MyApp,
    EventsPage,
    BiblePage,
    SermonsPage,
    NewsPage,
    MorePage,
    TabsPage,
    SeriesPage,
    EpisodePage,
    EventDetailsPage,
    NewsArticlePage,
    AboutUsPage,
    BranchesPage,
    LeadersPage,
    MinistriesPage,
    ConnectPage,
    TithingPage,
    MusicPage,
    SocialPage,
    MinistryDetailsPage,
    LocationMapPage,
    VideosPipe
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA7o_egw9Rk-61XZUlPyLBzGs-wcEg7RY4'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventsPage,
    BiblePage,
    SermonsPage,
    NewsPage,
    MorePage,
    TabsPage,
    SeriesPage,
    EpisodePage,
    EventDetailsPage,
    AboutUsPage,
    BranchesPage,
    LeadersPage,
    MinistriesPage,
    ConnectPage,
    TithingPage,
    MusicPage,
    SocialPage,
    NewsArticlePage,
    MinistryDetailsPage,
    LocationMapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    Calendar,
    SocialSharing,
    ThreeDeeTouch,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

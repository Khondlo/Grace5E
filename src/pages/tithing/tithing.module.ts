import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TithingPage } from './tithing';

@NgModule({
  declarations: [
    TithingPage,
  ],
  imports: [
    IonicPageModule.forChild(TithingPage),
  ],
})
export class TithingPageModule {}

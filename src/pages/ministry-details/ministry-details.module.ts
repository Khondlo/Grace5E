import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MinistryDetailsPage } from './ministry-details';

@NgModule({
  declarations: [
    MinistryDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MinistryDetailsPage),
  ],
})
export class MinistryDetailsPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeadersPage } from './leaders';

@NgModule({
  declarations: [
    LeadersPage,
  ],
  imports: [
    IonicPageModule.forChild(LeadersPage),
  ],
})
export class LeadersPageModule {}

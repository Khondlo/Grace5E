import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationMapPage } from './location-map';

@NgModule({
  declarations: [
    LocationMapPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationMapPage),
  ],
})
export class LocationMapPageModule {}

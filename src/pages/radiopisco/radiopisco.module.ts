import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RadioPiscoPage } from './radiopisco';

@NgModule({
  declarations: [
    RadioPiscoPage,
  ],
  imports: [
    IonicPageModule.forChild(RadioPiscoPage),
  ],
  exports: [
    RadioPiscoPage
  ]
})
export class RadioPiscoPageModule {}

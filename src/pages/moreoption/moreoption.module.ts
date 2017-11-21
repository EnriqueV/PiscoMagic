import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoreoptionPage } from './moreoption';

@NgModule({
  declarations: [
    MoreoptionPage,
  ],
  imports: [
    IonicPageModule.forChild(MoreoptionPage),
  ],
  exports: [
    MoreoptionPage
  ]
})
export class MoreoptionPageModule {}

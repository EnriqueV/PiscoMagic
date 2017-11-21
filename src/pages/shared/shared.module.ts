import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedPage } from './shared';
import { MainlistPage } from './mainlist/mainlist';

@NgModule({
  declarations: [
    MainlistPage,
    SharedPage,
  ],
  imports: [
    IonicPageModule.forChild(SharedPage),
  ],
  exports: [
    MainlistPage,
    SharedPage
  ]
})
export class SharedPageModule {}

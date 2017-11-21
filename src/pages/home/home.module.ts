import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { SharedPageModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    SharedPageModule
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}

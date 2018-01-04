import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RadioPeruPage } from './radioperu';

@NgModule({
  declarations: [
    RadioPeruPage,
  ],
  imports: [
    IonicPageModule.forChild(RadioPeruPage),
  ],
  exports: [
    RadioPeruPage
  ]
})
export class RadioPeruPageModule {}

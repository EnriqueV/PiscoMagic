import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestorePassPage } from './restorepass';

@NgModule({
  declarations: [
    RestorePassPage,
  ],
  imports: [
    IonicPageModule.forChild(RestorePassPage),
  ],
  exports: [
    RestorePassPage
  ]
})
export class RestorePassPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProDescriptionPage } from './prodescription';

@NgModule({
  declarations: [
    ProDescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(ProDescriptionPage),
  ],
  exports: [
    ProDescriptionPage
  ]
})
export class ProDescriptionPageModule {}

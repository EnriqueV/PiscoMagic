import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CuponPage } from './cupon';

@NgModule({
  declarations: [
    CuponPage,
  ],
  imports: [
    IonicPageModule.forChild(CuponPage),
  ],
  exports: [
    CuponPage
  ]
})
export class CuponPageModule {}

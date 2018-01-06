import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UbicacionesPage } from './ubicaciones';

@NgModule({
  declarations: [
    UbicacionesPage,
  ],
  imports: [
    IonicPageModule.forChild(UbicacionesPage),
  ],
  exports: [
    UbicacionesPage
  ]
})
export class UbicacionesPageModule {}

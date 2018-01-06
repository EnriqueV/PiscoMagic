import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DirectPerfilPage } from './directperfil';

@NgModule({
  declarations: [
    DirectPerfilPage,
  ],
  imports: [
    IonicPageModule.forChild(DirectPerfilPage),
  ],
  exports: [
    DirectPerfilPage
  ]
})
export class DirectPerfilPageModule {}

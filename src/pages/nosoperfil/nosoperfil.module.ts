import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NosoPerfilPage } from './nosoperfil';

@NgModule({
  declarations: [
    NosoPerfilPage,
  ],
  imports: [
    IonicPageModule.forChild(NosoPerfilPage),
  ],
  exports: [
    NosoPerfilPage
  ]
})
export class NosoPerfilPageModule {}

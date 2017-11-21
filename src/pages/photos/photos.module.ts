import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotosPage } from './photos';
import { SharedPageModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PhotosPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotosPage),
    SharedPageModule
  ],
  exports: [
    PhotosPage
  ]
})
export class PhotosPageModule {}

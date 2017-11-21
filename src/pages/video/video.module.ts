import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoPage } from './video';
import { SharedPageModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    VideoPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoPage),
    SharedPageModule
  ],
  exports: [
    VideoPage
  ]
})
export class VideoPageModule {}

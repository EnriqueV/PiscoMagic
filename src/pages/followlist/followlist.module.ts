import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FollowlistPage } from './followlist';

@NgModule({
  declarations: [
    FollowlistPage,
  ],
  imports: [
    IonicPageModule.forChild(FollowlistPage),
  ],
  exports: [
    FollowlistPage
  ]
})
export class FollowlistPageModule {}

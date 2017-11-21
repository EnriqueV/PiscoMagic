import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FollowpeoplePage } from './followpeople';

@NgModule({
  declarations: [
    FollowpeoplePage,
  ],
  imports: [
    IonicPageModule.forChild(FollowpeoplePage),
  ],
  exports: [
    FollowpeoplePage
  ]
})
export class FollowpeoplePageModule {}

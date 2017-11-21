import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-followlist',
  templateUrl: 'followlist.html'
})
export class FollowlistPage {
items:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items=[
    {img:"assets/images/profile.png"},
    {img:"assets/images/09.png"},
    {img:"assets/images/010.png"},
    {img:"assets/images/012.png"},
    {img:"assets/images/011.png"},
    {img:"assets/images/012.png"}];
  }

}

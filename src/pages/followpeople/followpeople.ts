import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-followpeople',
  templateUrl: 'followpeople.html'
})
export class FollowpeoplePage {
items:Array<any>; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items =[
    {img:"assets/images/03.png"},{img:"assets/images/04.png"},{img:"assets/images/07.png"},
    {img:"assets/images/08.png"}];
  }

}

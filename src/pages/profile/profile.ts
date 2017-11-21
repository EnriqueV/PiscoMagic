import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
profiletabs: string = "post";
items:Array<any>;
public isDisabled:boolean = true;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items =[
    {img:"assets/images/03.png"},{img:"assets/images/04.png"},{img:"assets/images/07.png",type:"video"},
    {img:"assets/images/08.png"}];
  }

  changeData(input){
  this.isDisabled =! this.isDisabled;
  }


}

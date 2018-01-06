import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
icons:Array<any>;


  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.icons = ['star', 'star', 'star', 'star-half', 'star-outline'];
  }

  presentoption(myEvent) {
  let popover = this.popoverCtrl.create('MoreoptionPage');
  popover.present({
    ev: myEvent
  });
  }


}

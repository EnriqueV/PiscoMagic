import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-radio',
  templateUrl: 'radio.html'
})
export class RadioPage {
  menu: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.menu = [
      { bg: "url(assets/images/radio/radiopisco.jpg)", txt: "RadioPiscoPage" },
      { bg: "url(assets/images/radio/radioperu.jpg)", txt: "RadioPeruPage" }
    ];
  }
}

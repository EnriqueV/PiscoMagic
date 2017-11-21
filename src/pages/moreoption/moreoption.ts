import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-moreoption',
  template: `
    <ion-list>
      <button ion-item (click)="close()">Hide this</button>
      <button ion-item (click)="close()">Copy URL</button>
    </ion-list>
  `
})
export class MoreoptionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }


}

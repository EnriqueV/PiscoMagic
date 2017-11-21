import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-category',
  template: `
    <ion-list>
      <button ion-item (click)="close()">TECHNOLOGY</button>
      <button ion-item (click)="close()">NEWS</button>
      <button ion-item (click)="close()">ENTERTAINMENT</button>
      <button ion-item (click)="close()">DESIGN</button>
      <button ion-item (click)="close()">HEALTH</button>
      <button ion-item (click)="close()">PRODUCTIVITY</button>
      <button ion-item (click)="close()">PHOTOGRAPHY</button>
    </ion-list>
  `
})
export class CategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }
  close() {
    this.viewCtrl.dismiss();
  }

}

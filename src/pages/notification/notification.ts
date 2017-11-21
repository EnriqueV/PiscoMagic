import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {
notification:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.notification=[
      {img:"assets/images/01.png",img2:"assets/images/011.png"},
      {img:"assets/images/05.png",img2:"assets/images/06.png"},
      {img:"assets/images/02.png",img2:"assets/images/022.png"},
      {img:"assets/images/01.png",img2:"assets/images/011.png"}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }
  
  goTo(page){
   this.navCtrl.push(page);
  }
}

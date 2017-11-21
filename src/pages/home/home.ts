import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';

@IonicPage()
@Component({
  selector: 'page-home', 
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
        MyApp.callfrom='home'
  }

  presentcategory(myEvent) {
    let popover = this.popoverCtrl.create('CategoryPage', {}, {cssClass: 'category-popover'});;
    popover.present({
      ev: myEvent
    });
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html'
})
export class ProductoPage {
  icons:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.icons = ['star', 'star', 'star', 'star-half', 'star-outline'];
  }

}

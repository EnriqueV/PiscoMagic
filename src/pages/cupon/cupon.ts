import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, Content } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cupon',
  templateUrl: 'cupon.html'
})
export class CuponPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

}

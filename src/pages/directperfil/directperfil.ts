import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, Content } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-directperfil',
  templateUrl: 'directperfil.html'
})
export class DirectPerfilPage {
  icons:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.icons = ['star', 'star', 'star', 'star-half', 'star-outline'];
  }

}

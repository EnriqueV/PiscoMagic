import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-nosoperfil',
  templateUrl: 'nosoperfil.html'
})
export class NosoPerfilPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {

  }

  presentoption(myEvent) {
  let popover = this.popoverCtrl.create('MoreoptionPage');
  popover.present({
    ev: myEvent
  });
  }


}

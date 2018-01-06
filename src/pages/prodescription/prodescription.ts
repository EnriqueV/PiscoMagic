import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-prodescription',
  templateUrl: 'prodescription.html'
})
export class ProDescriptionPage {
  icons:Array<any>;
  places:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.icons = ['star', 'star', 'star', 'star-half', 'star-outline'];
    this.places = [
      { name: "Pisquería Lima", dir: "Calle Hércules 121, San Roque, Surco Lima, Perú", tel: "+519 222 36470"},
      { name: "Pisquería Lima", dir: "Calle Hércules 121, San Roque, Surco Lima, Perú", tel: "+519 222 36470"}
    ]
  }

}

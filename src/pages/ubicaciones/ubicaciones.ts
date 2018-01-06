import { Component } from '@angular/core';

import { IonicPage, MenuController, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-ubicaciones',
  templateUrl: 'ubicaciones.html'
})

export class UbicacionesPage {
  places: Array<any>;

  constructor(
    public navCtrl: NavController,
    public menu: MenuController
  ) {
    this.places = [
      { name: "Pisquería Lima", icons: ['star', 'star', 'star', 'star-half', 'star-outline'], rate: "4.6(45)", dir: "Calle Hércules 121, San Roque, Surco Lima, Perú", tel: "+519 222 36470"},
      { name: "Pisquería Lima", icons: ['star', 'star', 'star', 'star-half', 'star-outline'], rate: "4.6(45)", dir: "Calle Hércules 121, San Roque, Surco Lima, Perú", tel: "+519 222 36470"},
      { name: "Pisquería Lima", icons: ['star', 'star', 'star', 'star-half', 'star-outline'], rate: "4.6(45)", dir: "Calle Hércules 121, San Roque, Surco Lima, Perú", tel: "+519 222 36470"},
      { name: "Pisquería Lima", icons: ['star', 'star', 'star', 'star-half', 'star-outline'], rate: "4.6(45)", dir: "Calle Hércules 121, San Roque, Surco Lima, Perú", tel: "+519 222 36470"},
      { name: "Pisquería Lima", icons: ['star', 'star', 'star', 'star-half', 'star-outline'], rate: "4.6(45)", dir: "Calle Hércules 121, San Roque, Surco Lima, Perú", tel: "+519 222 36470"},
      { name: "Pisquería Lima", icons: ['star', 'star', 'star', 'star-half', 'star-outline'], rate: "4.6(45)", dir: "Calle Hércules 121, San Roque, Surco Lima, Perú", tel: "+519 222 36470"},
      { name: "Pisquería Lima", icons: ['star', 'star', 'star', 'star-half', 'star-outline'], rate: "4.6(45)", dir: "Calle Hércules 121, San Roque, Surco Lima, Perú", tel: "+519 222 36470"},
      { name: "Pisquería Lima", icons: ['star', 'star', 'star', 'star-half', 'star-outline'], rate: "4.6(45)", dir: "Calle Hércules 121, San Roque, Surco Lima, Perú", tel: "+519 222 36470"}
    ]
  }

  ionViewWillEnter() {

  }

}

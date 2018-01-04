import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cupones',
  templateUrl: 'cupones.html'
})
export class CuponesPage {
  cupones: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cupones = [
      { bg: "url(assets/images/cupones/01.jpeg)", txt: "Restaurante Piscon", desc: "20%" },
      { bg: "url(assets/images/cupones/02.jpg)", txt: "Restaurant Comida Peruana - Limón", desc: "10%" },
      { bg: "url(assets/images/cupones/03.jpg)", txt: "Bebidas Pisco", desc: "10%" },
      { bg: "url(assets/images/cupones/04.jpg)", txt: "Cupón 1", desc: "25%" },
      { bg: "url(assets/images/cupones/05.jpg)", txt: "Cupón 2", desc: "20%" }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuponesPage');
  }

  goTo(page) {
    this.navCtrl.push(page);
  }
}

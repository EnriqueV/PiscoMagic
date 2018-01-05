import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html'
})
export class EventosPage {
  eventos: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.eventos = [
      { bg: "url(assets/images/cupones/01.jpeg)", txt: "Sigue la fiesta donde sea...", fecha: "Viernes 29 | Dic | 2017", precio: "S/ 64,00.00", dir: "Calle Hércules 121, San Roque, Surco Lima, Perú" },
      { bg: "url(assets/images/cupones/02.jpg)", txt: "Festival del Pisco", fecha: "Domingo 14 | Ene | 2018", precio: "S/ 50,00.00", dir: "Calle Hércules 121, San Roque, Surco Lima, Perú" },
      { bg: "url(assets/images/cupones/03.jpg)", txt: "Noche de Dj's", fecha: "Viernes 19 | Ene | 2018", precio: "S/ 20,00.00", dir: "Calle Hércules 121, San Roque, Surco Lima, Perú" }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventosPage');
  }

  goTo(page) {
    this.navCtrl.push(page);
  }
}

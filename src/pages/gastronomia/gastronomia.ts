import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-gastronomia',
  templateUrl: 'gastronomia.html'
})
export class GastronomiaPage {
  cards: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.cards = [
      { img: "assets/images/cupones/03.jpg", cat: "PISCO", name: "Pisco Sour", txt: "Goza de este Pisco Suramericano listo en sólo 10 minutos una bebida para refrescar.", icon: "ios-wine" },
      { img: "assets/images/cupones/02.jpg", cat: "GASTRONOMÍA", name: "Lomo Saltado", txt: "Este lomo sofrito con verduras al estilo Peruano saltado con arroz una comida deliciosa.", icon: "ios-restaurant" }
    ];
  }

  sharePopover(myEvent) {
  let popover = this.popoverCtrl.create('SharepopupPage', {}, {cssClass: 'share-popover'});
  popover.present({
      ev: myEvent
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GastronomiaPage');
  }

  goTo(page) {
    this.navCtrl.push(page);
  }
}

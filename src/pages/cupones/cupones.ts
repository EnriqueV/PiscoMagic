import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {LoadingController } from 'ionic-angular/index';

@IonicPage()
@Component({
  selector: 'page-cupones',
  templateUrl: 'cupones.html'
})
export class CuponesPage {
  cupones: Array<any>;
  items:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController,public http: Http,public loadingCtrl: LoadingController) {
    this.items = [
      { bg: "url(assets/images/cupones/01.jpeg)", txt: "Restaurante Piscon", desc: "20%" },
      { bg: "url(assets/images/cupones/02.jpg)", txt: "Restaurant Comida Peruana - Limón", desc: "10%" },
      { bg: "url(assets/images/cupones/03.jpg)", txt: "Bebidas Pisco", desc: "10%" },
      { bg: "url(assets/images/cupones/04.jpg)", txt: "Cupón 1", desc: "25%" },
      { bg: "url(assets/images/cupones/05.jpg)", txt: "Cupón 2", desc: "20%" }
    ];

    this.http.get('http://dcsocialmarketing.com/previo/PiscosAdmin/index.php/api/cupones_descuento?userId=2').map(res => res.json()).subscribe(data => {
      this.items = data;
      let loading = this.loadingCtrl.create({
        spinner: 'hide',
        content: `
          <div class="custom-spinner-container">
            <div class="custom-spinner-box"></div>
          </div>`,
        duration: 5000
      });

      loading.onDidDismiss(() => {
        console.log('Dismissed loading');
      });

      loading.present();

      console.log(this.items);
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuponesPage');
  }

  goTo(page) {
    this.navCtrl.push(page);
  }
}

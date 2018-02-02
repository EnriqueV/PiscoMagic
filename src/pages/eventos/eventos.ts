import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {LoadingController } from 'ionic-angular/index';

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html'
})
export class EventosPage {
  eventos: Array<any>;
  items:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController,public http: Http,public loadingCtrl: LoadingController) {
    this.eventos = [
      { bg: "url(assets/images/cupones/01.jpeg)", txt: "Sigue la fiesta donde sea...", fecha: "Viernes 29 | Dic | 2017", precio: "S/ 64,00.00", dir: "Calle Hércules 121, San Roque, Surco Lima, Perú" },
      { bg: "url(assets/images/cupones/02.jpg)", txt: "Festival del Pisco", fecha: "Domingo 14 | Ene | 2018", precio: "S/ 50,00.00", dir: "Calle Hércules 121, San Roque, Surco Lima, Perú" },
      { bg: "url(assets/images/cupones/03.jpg)", txt: "Noche de Dj's", fecha: "Viernes 19 | Ene | 2018", precio: "S/ 20,00.00", dir: "Calle Hércules 121, San Roque, Surco Lima, Perú" }
    ];

    MyApp.callfrom='home'

        this.http.get('http://dcsocialmarketing.com/previo/PiscosAdmin/index.php/api/noticias').map(res => res.json()).subscribe(data => {
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
    console.log('ionViewDidLoad EventosPage');
  }

  goTo(page) {
    this.navCtrl.push(page);
  }
}

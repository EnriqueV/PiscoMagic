import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {LoadingController } from 'ionic-angular/index';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:Array<any>;
  videolist:boolean;
  photoslist:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController,public http: Http,public loadingCtrl: LoadingController) {
        MyApp.callfrom='home'

        this.http.get('http://dcsocialmarketing.com/previo/PiscosAdmin/index.php/api/piscos').map(res => res.json()).subscribe(data => {
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

  presentcategory(myEvent) {
    let popover = this.popoverCtrl.create('CategoryPage', {}, {cssClass: 'category-popover'});;
    popover.present({
      ev: myEvent
    });
  }
}

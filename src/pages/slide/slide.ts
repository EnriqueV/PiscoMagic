import { Component, ViewChild } from '@angular/core';

import { MenuController, NavController, Slides, Platform } from 'ionic-angular';


import { LoginPage } from '../login/login';

@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html'
})

export class SlidePage {
  showSkip = true;
  plataforma = "ios";

	@ViewChild('slides') slides: Slides;

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public platform: Platform
  ) {
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        this.plataforma = "android";
        console.log("running on Android device!");
      }
    });
  }

  ionViewWillEnter() {
    this.slides.update();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}

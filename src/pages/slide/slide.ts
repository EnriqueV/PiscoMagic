import { Component, ViewChild } from '@angular/core';

import { MenuController, NavController, Slides, Platform } from 'ionic-angular';

import { Storage } from '@ionic/storage';

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
    public storage: Storage,
    public platform: Platform
  ) {
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        this.plataforma = "android";
        console.log("running on Android device!");
      }
    });
  }

  startApp() {
    this.navCtrl.push(LoginPage).then(() => {
      this.storage.set('hasSeenSlide', 'false'); //true para mostrarlo solo una vez
    })
  }

  onSlideChangeStart(slider: Slides) {
    this.showSkip = !slider.isEnd();
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

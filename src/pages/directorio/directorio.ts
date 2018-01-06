import { Component, ViewChild } from '@angular/core';

import { IonicPage, MenuController, NavController, Slides } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-directorio',
  templateUrl: 'directorio.html'
})

export class DirectorioPage {

  @ViewChild('slides') slides: Slides;
  slide: Array<any>;
  menus: Array<any>;

  constructor(
    public navCtrl: NavController,
    public menu: MenuController
  ) {
    this.slide = [
      { bg: "url(assets/images/menu/slide/pisco.jpg)", txt: "Historia del Pisco" },
      { bg: "url(assets/images/menu/slide/pisco1.jpg)", txt: " Slide 2" },
      { bg: "url(assets/images/menu/slide/pisco2.jpg)", txt: " Slide 3" }
    ];
    this.menus = [
      { bg: "url(assets/images/menu/gastronomia.jpg)", txt: "GastronomiaPage" },
      { bg: "url(assets/images/menu/radio.jpg)", txt: "RadioPage" },
      { bg: "url(assets/images/menu/eventos.jpg)", txt: "EventosPage" },
      { bg: "url(assets/images/menu/cupones.jpg)", txt: "CuponesPage" },
      { bg: "url(assets/images/menu/directorio.jpg)", txt: "DirectorioPage" }
    ];
  }

  ionViewWillEnter() {

  }

}

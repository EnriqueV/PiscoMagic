import { Component } from '@angular/core';

import { IonicPage, MenuController, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})

export class MenuPage {

  constructor(
    public navCtrl: NavController,
    public menu: MenuController
  ) { }

}

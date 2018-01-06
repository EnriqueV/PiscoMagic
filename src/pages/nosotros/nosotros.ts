import { Component } from '@angular/core';

import { IonicPage, MenuController, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-nosotros',
  templateUrl: 'nosotros.html'
})

export class NosotrosPage {
  members: Array<any>;

  constructor(
    public navCtrl: NavController,
    public menu: MenuController
  ) {
    this.members = [
      { name: "Jacqueline M.", txt: "Miembro 1", img: "assets/images/010.png"},
      { name: "Sergio R.", txt: "Miembro 2", img: "assets/images/profile.png"},
      { name: "Jacqueline M.", txt: "Miembro 3", img: "assets/images/010.png"},
      { name: "Sergio R.", txt: "Miembro 4", img: "assets/images/profile.png"},
      { name: "Jacqueline M.", txt: "Miembro 5", img: "assets/images/010.png"}
    ]
  }

  ionViewWillEnter() {

  }

}

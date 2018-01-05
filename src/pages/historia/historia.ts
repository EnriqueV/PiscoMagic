import {  Component, ViewChild  } from '@angular/core';
import {  IonicPage, NavController, NavParams, PopoverController, Content } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-historia',
  templateUrl: 'historia.html'
})
export class HistoriaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {}

}

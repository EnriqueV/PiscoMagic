import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  AlertController } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  _http: any;

    username: any;
    password:any;
    email: any;
    telefono:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http,public alertCtrl: AlertController,) {}

}

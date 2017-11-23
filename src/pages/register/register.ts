import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  AlertController } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import {Headers,RequestOptions} from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  _http: any;

    username: string;
    password:string;
    email: string;
    telefono:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http,public alertCtrl: AlertController,) {}


  submit() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

    let postParams = {
      "username": this.username,
      "password": this.password,
      "email":this.email,
      "telefono":this.telefono
    }

    this.http.post("http://dcsocialmarketing.com/previo/PiscosAdmin/index.php/api/registrarse", postParams, options)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);// Error getting the data
      });



    }



}

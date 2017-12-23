import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  _http: any;

  username: any;
  password: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private http: Http,
    public menu: MenuController
  ) {
    this.http = http;
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

  forgotPassword() {
    let forgotpas = this.alertCtrl.create({
      title: 'Forgot password',
      message: "Enter your email address and we'll help you reset your password",
      inputs: [
        {
          name: 'email',
          placeholder: 'E-mail'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
          }
        }
      ]
    });
    forgotpas.present();
  }

  submit() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    let postParams = {
      "username": this.username,
      "password": this.password
    }

    this.http.post("http://dcsocialmarketing.com/previo/PiscosAdmin/index.php/api/login", postParams, options)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);// Error getting the data
      });
  }

}

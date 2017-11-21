import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  _http: any;

  username: any;
  password:any;

 constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,  private http: Http) {
  this.http = http;

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

    var data = {
      "username": this.username,
      "password": this.password
    };
    debugger;



    this.http.post('http://dcsocialmarketing.com/previo/PiscosAdmin/index.php/api/login', data)
    .subscribe(data => {
        console.log(data.status);

    }, error => {
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Problema de conexion con el servidor',
        buttons: ['Aceptar']
      });
      alert.present();
    });

}
}

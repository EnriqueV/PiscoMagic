import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { LoginPage } from '../pages/login/login';
import { SlidePage } from '../pages/slide/slide';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  public static callfrom;
  pages:  Array<any>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public storage: Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
       { title: 'Piscos', component: 'HomePage', icon:"home" },
       { title: 'Noticias', component: 'VideoPage', icon:"play" },
     //  { title: 'Noticias', component: 'PhotosPage', icon:"image"  },
       { title: 'Cupones', component: "NotificationPage", icon:"notifications" },
       { title: 'perfil', component: "ProfilePage", icon:"person" },
       { title: 'Radios', component: "AboutPage", icon:"information-circle" },
       { title: 'Contacto', component: "ContactPage", icon:"call" },
       { title: 'Salir', component: "LoginPage", icon:"log-out" }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // Check if the user has already seen the slide
      this.storage.get('hasSeenSlide')
      .then((hasSeenSlide) => {
        if (hasSeenSlide) {
          this.rootPage = LoginPage;
        } else {
          this.rootPage = SlidePage;
        }
      });
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component );
    // this.nav.setRoot([page.component,{title:page.title}]);

  }
}

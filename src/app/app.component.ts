import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuPage } from '../pages/menu/menu';
import { LoginPage } from '../pages/login/login';
import { SlidePage } from '../pages/slide/slide';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = SlidePage;
  public static callfrom;
  pages:  Array<any>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
       { title: 'Historia del Pisco', component: 'HistoriaPage', icon:"home" },
       { title: 'Menú', component: 'MenuPage', icon:"menu" },
       { title: 'Pisco Directorio', component: "DirectorioPage", icon:"book" },
       { title: 'Pisco y Gastronomía', component: "HomePage", icon:"restaurant" }, //GastronomiaPage
       { title: 'Radio', component: "RadioPage", icon:"mic" },
       { title: 'Eventos', component: "EventosPage", icon:"calendar" },
       { title: 'Cupones', component: "CuponesPage", icon:"paper" },
       { title: 'Perfil', component: "ProfilePage", icon:"person" }, //PerfilPage
       { title: 'Nosotros', component: "NosotrosPage", icon:"people" },
       { title: 'Contáctanos', component: "ContactPage", icon:"call" },
       { title: 'Salir', component: "LoginPage", icon:"log-out" }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component );
    // this.nav.setRoot([page.component,{title:page.title}]);

  }
}

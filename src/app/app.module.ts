import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SharedPageModule } from '../pages/shared/shared.module';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { SlidePage } from '../pages/slide/slide';
import { LoginPage } from '../pages/login/login';
import { LoginPageModule } from '../pages/login/login.module';

var config = {
      backButtonText: '',
      iconMode: 'md',
      pageTransition: 'md',
      mode:'md'
    };

@NgModule({
  declarations: [
    MyApp,
    SlidePage
  ],
  imports: [
    IonicModule.forRoot(MyApp,config),
    BrowserModule,
    SharedPageModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SlidePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

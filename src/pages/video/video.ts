import { Component } from '@angular/core'; 
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html'
})
export class VideoPage  { 

  constructor( public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
    MyApp.callfrom='video'
  }

  presentcategory(myEvent) {
  let popover = this.popoverCtrl.create('CategoryPage', {}, {cssClass: 'category-popover'});
  popover.present({
    ev: myEvent
  });
  }

}

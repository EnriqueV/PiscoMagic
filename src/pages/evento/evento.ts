import {  Component, ViewChild  } from '@angular/core';
import {  IonicPage, NavController, NavParams, PopoverController, Content } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-evento',
  templateUrl: 'evento.html'
})
export class EventoPage {

@ViewChild(Content) content: Content;
icons:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  this.icons = ['star', 'star', 'star', 'star-half', 'star-outline'];
  }

  sharePopover(myEvent) {
  let popover = this.popoverCtrl.create('SharepopupPage', {}, {cssClass: 'share-popover'});
  popover.present({
      ev: myEvent
  });
  }

  presentoption(myEvent) {
  let popover = this.popoverCtrl.create('MoreoptionPage');
  popover.present({
    ev: myEvent
  });
  }

  goToBottom(){
    setTimeout(()=>{this.content.scrollToBottom();},200);
  }
}

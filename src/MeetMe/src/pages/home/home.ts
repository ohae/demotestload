import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Meeting } from '../../app/model';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  selectedItem: any;
  items: Meeting[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  //itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    //this.navCtrl.push(, item);
  //}
}

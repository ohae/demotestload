import { Component } from '@angular/core';

import { MeetingdetailPage } from '../meetingdetail/meetingdetail';
import { AlertController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { Meeting } from '../../app/model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  selectedItem: any;
  items: Meeting[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private httpClient: HttpClient,private alertCtrl: AlertController) {

  }
  goMeet(){
    this.navCtrl.push(MeetingdetailPage);
  }

  createmeeting() {
    let alert = this.alertCtrl.create({
      title: 'Topic',
      inputs: [
        {
          name: 'topicname',
          placeholder: 'topicname'
        },
        {
          name: 'topicdetail',
          placeholder: 'topicdetail',
        
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Create',
          handler: data => {
          }
        }
      ]
    });
    alert.present();
  }

  //itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    //this.navCtrl.push(, item);
  //}
}

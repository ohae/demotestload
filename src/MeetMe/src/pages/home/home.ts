import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MeetingdetailPage } from '../meetingdetail/meetingdetail';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {

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
}

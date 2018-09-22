import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyGroup } from '../../app/model'
import { HttpClient } from '@angular/common/http';
import { MeetingdetailPage } from '../meetingdetail/meetingdetail';

/**
 * Generated class for the MygroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mygroup',
  templateUrl: 'mygroup.html',
})
export class MygroupPage {
  selectedItem: any;
  items: MyGroup[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private httpClient: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MygroupPage');
  }
  detail()
  {
    this.navCtrl.push(MeetingdetailPage);
  }
}

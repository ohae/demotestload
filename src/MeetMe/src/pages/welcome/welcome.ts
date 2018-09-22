import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { User } from '../../app/model'
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  item : User = new User("","","");
  constructor(public navCtrl: NavController, public navParams: NavParams,private httpClient: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  RegisterName(){ 
    let option = { "headers": { "Content-Type": "application/json" } };
    this.httpClient.post("https://demomeetmeapi.azurewebsites.net/api/meetme/login",
    this.item,
      option).subscribe((result: any) => {        
        console.log(result);
      }, error => {
        console.log(error);
      });
      alert("Success");
      this.navCtrl.push(TabsPage);
    }
}

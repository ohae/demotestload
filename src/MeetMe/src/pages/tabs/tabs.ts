import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MygroupPage } from '../mygroup/mygroup'
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MygroupPage;

  constructor() {

  }
}

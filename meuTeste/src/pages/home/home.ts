import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  texto : string = "Geronimooooooooooooooooooooooo!"
  constructor(public navCtrl: NavController) {

  }

}


import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public getFaStatus, public run) {
      // grab stuff from formsaudio
      // TODO not dual binding this???
      this.getFaStatus = getFaStatus;
      this.run = run;
  }

}

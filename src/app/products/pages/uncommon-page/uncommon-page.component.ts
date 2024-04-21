import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select Pipe
  public name: string = 'Ricardo';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invite',
    female: 'invite her'
  }

  changeClient():void {
    this.name = 'Bárbara';
    this.gender = 'female';
  }
}

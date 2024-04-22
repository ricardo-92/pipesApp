import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18nSelect Pipe
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

  // i18nPlural Pipe
  public clients: string[] = ['Ricardo', 'Bárbara', 'JuanPablo', 'Lia', 'Andrea', 'Fernanda'];
  public clientsMap = {
    '=0': "We don't have any clients waiting.",
    '=1': 'We have a client waiting.',
    '=2': 'We have 2 clients waiting.',
    'other': 'We have # clients waiting.'
  }

  deleteClient():void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person ={
    name: 'Ricardo',
    age: 31,
    addres: 'Recoleta, Chile'
  }

  // Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('tap', value) )
  );
}

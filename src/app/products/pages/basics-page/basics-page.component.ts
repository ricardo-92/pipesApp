import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'ricardo';
  public nameUpper: string = 'RICARDO';
  public fullName: string = 'RiCARdo espiNOZa'

  public customDate: Date = new Date();
}

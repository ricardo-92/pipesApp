import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  public menuItems: MenuItem[] = [];

    ngOnInit() {
      this.menuItems = [
        {
          label: 'Angular Pipes',
          icon: 'pi pi-desktop',
          items: [
            {
              label: 'Texts & Dates',
              icon: 'pi pi-align-left',
              routerLink: '/'
            },
            {
              label: 'Numbers',
              icon: 'pi pi-dollar',
              routerLink: 'numbers'
            },
            {
              label: 'Uncommon',
              icon: 'pi pi-globe',
              routerLink: 'uncommon'
            },
          ]
        },
        {
          label: 'Custom Pipes',
          icon: 'pi pi-cog',
          items: [
            {
              label: 'Custom Pipes',
              icon: 'pi pi-cog',
              routerLink: 'custom'
            }
          ]
        }
      ];
    }
}

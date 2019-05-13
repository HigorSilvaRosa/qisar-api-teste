import { Component } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Qisar API Teste';
  menuItemList: Array<MenuItem> = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      routerLink: "/home"
    },
    {
      label: 'Lista',
      icon: 'pi pi-fw pi-list',
      routerLink: "/list"
    },
    {
      label: 'Sobre',
      icon: 'pi pi-fw pi-info-circle',
      routerLink: "/about"
    },
  ]
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuOption } from './menu-option';
import { MENU_OPTIONS } from './menu-options';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  options: MenuOption[] = MENU_OPTIONS

  constructor(private router: Router) {
  }

  isActiveRoute(route) {
    return this.router.url === route;
  }
}

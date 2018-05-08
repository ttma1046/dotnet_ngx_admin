import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  template: `
      I am in the pages.component!!!!
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}

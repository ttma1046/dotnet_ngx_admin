import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
// import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
// import { ThemeModule } from '../@theme/theme.module';
// import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

    // ThemeModule,
    // DashboardModule,
    // MiscellaneousModule,
    
const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,

  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}

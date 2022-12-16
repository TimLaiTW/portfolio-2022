import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { Header } from './header/header';
import { DesignPage } from './pages/design-page';
import { AboutPage } from './pages/about-page';

/** Components module */
@NgModule({
  declarations: [
    Header,
    DesignPage,
    AboutPage
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    Header,
    DesignPage,
    AboutPage
  ]
})
export class ComponentsModule { }

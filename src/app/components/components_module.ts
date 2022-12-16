import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

import { Header } from './header/header';
import { DesignPage } from './pages/design-page';
import { AboutPage } from './pages/about-page';
import { ProjectCard } from './project-card/project-card';

/** Components module */
@NgModule({
  declarations: [
    Header,
    DesignPage,
    AboutPage,
    ProjectCard
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule
  ],
  exports: [
    Header,
    DesignPage,
    AboutPage,
    ProjectCard
  ]
})
export class ComponentsModule { }

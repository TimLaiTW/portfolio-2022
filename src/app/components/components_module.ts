import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';

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

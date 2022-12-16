import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ComponentsModule } from './components/components_module';

import { PortfolioApp } from './portfolio_app';

/** Base Angular app module */
@NgModule({
  declarations: [
    PortfolioApp
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [PortfolioApp]
})
export class AppModule { }

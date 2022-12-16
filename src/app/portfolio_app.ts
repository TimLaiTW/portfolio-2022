import { Component } from '@angular/core';
import { PageType, DarkTheme } from '../types';

@Component({
  selector: 'app-root',
  templateUrl: './portfolio_app.html',
  styleUrls: ['./portfolio_app.scss']
})
export class PortfolioApp {
  currentPage: PageType = PageType.HOME;
  darkTheme: DarkTheme = false;
  
  PageType = PageType;
}

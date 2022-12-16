import { Component } from '@angular/core';
import { PageType } from '../types';

@Component({
  selector: 'app-root',
  templateUrl: './portfolio_app.html',
  styleUrls: ['./portfolio_app.scss']
})
export class PortfolioApp {
  currentPage: PageType = PageType.HOME

  PageType = PageType;
}

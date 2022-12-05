import { Component } from '@angular/core';
import { PageType } from '../types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentPage: PageType = PageType.HOME

  PageType = PageType;
}

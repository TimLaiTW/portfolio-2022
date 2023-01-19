import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageType, DarkTheme, button } from 'src/types';

@Component({
  selector: 'header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  @Input() currentPage!: PageType;
  @Output() currentPageChange = new EventEmitter<PageType>();
  @Input() darkTheme!: DarkTheme;
  @Output() darkThemeChange = new EventEmitter<DarkTheme>();
  
  PageType = PageType;
  navButtonGroup: button[] = [
    {
      buttonText: PageType.DESIGN,
      class: 'type-body-1 header-button',
    },
    {
      buttonText: PageType.ABOUT,
      class: 'type-body-1 header-button',
    }
  ]

  constructor() { }

  changePage(pageType:PageType){
    this.currentPageChange.emit(pageType);
  }

  changeTheme(){
    this.darkThemeChange.emit(!this.darkTheme);
  }
}

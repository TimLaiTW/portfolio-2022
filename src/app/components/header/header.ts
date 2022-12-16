import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageType, DarkTheme } from 'src/types';

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

  constructor() { }

  changePage(pageType:PageType){
    this.currentPageChange.emit(pageType);
  }

  changeTheme(){
    this.darkThemeChange.emit(!this.darkTheme);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageType } from 'src/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header implements OnInit {
  @Input() currentPage!: PageType;
  @Output() currentPageChange = new EventEmitter<PageType>();
  
  PageType = PageType;

  constructor() { }

  ngOnInit(): void {
  }

  changePage(pageType:PageType){
    this.currentPageChange.emit(pageType);
  }
}

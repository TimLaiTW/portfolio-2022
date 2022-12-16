import { Component, OnInit } from '@angular/core';
import { Projects } from '../../../constant';

@Component({
  selector: 'design-page',
  templateUrl: './design-page.html',
  styleUrls: ['./design-page.scss']
})
export class DesignPage implements OnInit {
  projects = Projects;
  constructor() { }

  ngOnInit(): void {
  }

}

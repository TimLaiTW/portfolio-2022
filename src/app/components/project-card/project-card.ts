import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/types';
@Component({
  selector: 'project-card',
  templateUrl: './project-card.html',
  styleUrls: ['./project-card.scss']
})
export class ProjectCard implements OnInit {
  @Input() project!: Project;
  
  constructor() { }

  ngOnInit(): void {
  }

}

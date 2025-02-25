import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  project: Project = {
    id: 0,
    name: 'sample Angular App',
    summary: 'test description',
    description: '',
    projectLink: '',
    tags: ['angular', 'typescript'],
    pictures: [],
  }
  constructor(private titleService: Title){
    this.titleService.setTitle('aimad elkaouri - Portfolio');
  }
}

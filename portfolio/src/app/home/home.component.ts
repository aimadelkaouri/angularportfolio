import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  feauturedProject = {} as Project;

  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('aimad elkaouri - Home');
  }
  ngOnInit(): void {
    this.feauturedProject = this.projectService.GetProjectsById(0);
  }
}

import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  projects: Project[] = [
      {id:0, name: "Mon projet 1", pictures: ["../../assets/pmn3.png"], projectLink: 'test', summary: 'mon teste', description: 'text', tags: [Tag.ANGULAR]},
      {id:1, name: "Mon projet 2", pictures: [], projectLink: 'test', summary: 'mon teste', description: 'text', tags: [Tag.ANGULAR]},
      {id:2, name: "Mon projet 3", pictures: [], projectLink: 'test', summary: 'mon teste', description: 'text', tags: [Tag.ANGULAR]},
      {id:3, name: "Mon projet 4", pictures: [], projectLink: 'test', summary: 'mon teste', description: 'text', tags: [Tag.ANGULAR]},
  
      {id:4, name: "Mon projet 5", pictures: [], projectLink: 'test', summary: 'mon teste', description: 'text', tags: [Tag.ANGULAR]},
    ];
  

  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectsById(id: number) : Project{
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id' + id);
    }

    return project;
  }
}

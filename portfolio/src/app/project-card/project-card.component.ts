import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { NgFor } from '@angular/common';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-project-card',
  imports: [NgFor, ModalModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project= {} as Project;
}

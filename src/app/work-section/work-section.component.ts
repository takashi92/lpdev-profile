import { Component, OnInit } from '@angular/core';
import { JsonHandlerService } from '../jsonHandler.service';
@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.css']
})
export class WorkSectionComponent implements OnInit {
  projectSections: Array<Project> = [];
  selectedProject;
  constructor(private jsonHandlerService: JsonHandlerService) {
    this.jsonHandlerService.getProjectSectionData().subscribe(project => {
      this.projectSections=project;
    });
    this.selectedProject = "assets/img/project/mobile/vifish-screen1.png";
  }

  ngOnInit() {
  }

  imageOnClick(index) {
    this.selectedProject = this.projectSections[index].image;
  }
}

export interface Project {
  image: string;
  thumbImage: string;
}

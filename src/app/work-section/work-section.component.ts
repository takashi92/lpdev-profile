import { Component, OnInit } from '@angular/core';
import { JsonHandlerService } from '../jsonHandler.service';
@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.css']
})
export class WorkSectionComponent implements OnInit {
  projectSections: Array<Project> = [];
  detailProjects: Array<DetailProject> = [];
  allScreen: Array<Screen> = [];
  selectedScreenIndex = 0;
  selectedProjectIndex = 0;
  constructor(private jsonHandlerService: JsonHandlerService) {
    this.jsonHandlerService.getProjectSectionData().subscribe(project => {
      this.projectSections = project;
    });
    this.jsonHandlerService.getProjectDetailData().subscribe(details => {
      this.detailProjects = details;
      for (var detail of details) {
        Array.prototype.push.apply(this.allScreen,detail.screen);
      }
    });
  }

  ngOnInit() {
  }

  imageOnClick(index) {
    this.selectedScreenIndex = index;
    // this.selectedProject =  this.detailProjects.find(detail => detail.code == selectedCode);
  }

  projectOnClick(index) {
    this.selectedProjectIndex = index;
  }
}

export interface Project {
  code: string;
  image: string;
  thumbImage: string;
}



export interface Screen {
  image: string;
  thumbImage: string;
}

export interface DetailProject {
  code: string;
  name: string;
  description: string;
  technologies: string;
  management: string;
  screen: Screen[];
}





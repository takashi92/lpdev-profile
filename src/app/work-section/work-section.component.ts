import { Component, OnInit, ViewChild, } from '@angular/core';
import { JsonHandlerService } from '../jsonHandler.service';
import { NgImageSliderModule, NgImageSliderComponent } from 'ng-image-slider';
@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.css']
})
export class WorkSectionComponent implements OnInit {
  @ViewChild('nav', null) slider: NgImageSliderComponent;
  detailProjects: any[] = [];
  allScreen: any[] = [];
  selectedProjects = new Map();
  selectedProject: DetailProject;
  selectedScreen;
  constructor(private jsonHandlerService: JsonHandlerService) {
    // this.selectedScreen=slider.currentImageSrc;
    this.jsonHandlerService.getProjectDetailData().subscribe(details => {
      this.detailProjects = details;
      let index = 0;
      this.selectedProject = details[0];
      this.selectedScreen = this.selectedProject.screen[0].image;
      for (var detail of details) {
        for (var screen of detail.screen) {
          this.allScreen.push(screen);
          index = index + 1;
          this.selectedProjects.set(index, detail);
        }
      }
    });
    console.log(this.selectedProjects);

    console.log(this.slider);
  }

  ngOnInit() {
  }

  imageOnClick(index) {
    console.log("imageOnClick " + index);
    // this.slider.;
    this.selectedProject = this.selectedProjects.get(index);
    this.selectedScreen = this.selectedProject.screen[0].image;
  }

  setSelectedScreen(image) {
    this.selectedScreen = image;
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





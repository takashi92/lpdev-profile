import { Component, OnInit } from '@angular/core';
import { JsonHandlerService } from '../jsonHandler.service';
@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.css']
})
export class WorkSectionComponent implements OnInit {
  projectSections: any[] = [];
  constructor(private jsonHandlerService: JsonHandlerService) {
    this.jsonHandlerService.getProjectSectionData().subscribe(projects => {
      this.projectSections.push(projects.dichly);
      this.projectSections.push(projects.vifish);
    });
  }

  ngOnInit() {
  }

}
import { Component, OnInit } from '@angular/core';
import { JsonHandlerService } from '../jsonHandler.service';
@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.css']
})
export class WorkSectionComponent implements OnInit {
  projectSections;
  constructor(private jsonHandlerService: JsonHandlerService) {
     this.projectSections = this.jsonHandlerService.getProjectSectionData();
   }

  ngOnInit() {
  }

}
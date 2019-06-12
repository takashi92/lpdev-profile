import { Component, OnInit } from '@angular/core';
import { JsonHandlerService } from '../jsonHandler.service';

@Component({
  selector: 'app-software-service-section',
  templateUrl: './software-service-section.component.html',
  styleUrls: ['./software-service-section.component.css']
})
export class SoftwareServiceSectionComponent implements OnInit {
  softwareSections;
  constructor(private jsonHandlerService: JsonHandlerService) {
    this.softwareSections = this.jsonHandlerService.getSoftwareSectionData();
  }

  ngOnInit() {
  }

}

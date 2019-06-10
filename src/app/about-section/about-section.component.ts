import { Component, OnInit } from '@angular/core';
import { JsonHandlerService } from '../jsonHandler.service';
@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {
  aboutSections;
  softwareSections;
  constructor(private jsonHandlerService: JsonHandlerService) {
    this.aboutSections = this.jsonHandlerService.getAboutSectionData();
    this.softwareSections = this.jsonHandlerService.getSoftwareSectionData();
  }

  ngOnInit() {
  }

}
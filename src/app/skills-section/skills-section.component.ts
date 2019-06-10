import { Component, OnInit } from '@angular/core';
import { JsonHandlerService } from '../jsonHandler.service';
@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent implements OnInit {
  skillSections;
  constructor(private jsonHandlerService: JsonHandlerService) {
    this.skillSections = this.jsonHandlerService.getSkillsSectionData();
   }

  ngOnInit() {
  }

}
import { Component, OnInit } from '@angular/core';
import { JsonHandlerService } from '../jsonHandler.service';
@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent implements OnInit {
  public frontendSkills = [];
  public backendSkills = [];
  public others = [];
  constructor(private jsonHandlerService: JsonHandlerService) {
    this.jsonHandlerService.getSkillsSectionData().subscribe((skills) => {
      this.frontendSkills = skills.frontend;
      this.backendSkills = skills.backend;
      this.others = skills.others;
    })
    
   }

  ngOnInit() {
  }

}
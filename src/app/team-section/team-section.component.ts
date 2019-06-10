import { Component, OnInit } from '@angular/core';
import { JsonHandlerService } from '../jsonHandler.service';
@Component({
  selector: 'app-team-section',
  templateUrl: './team-section.component.html',
  styleUrls: ['./team-section.component.css']
})
export class TeamSectionComponent implements OnInit {
  teamSections;
  constructor(private jsonHandlerService: JsonHandlerService) {
    this.teamSections = this.jsonHandlerService.getTeamSectionData();
  }

  ngOnInit() {
  }

}
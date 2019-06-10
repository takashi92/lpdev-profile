import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JsonHandlerService {

  constructor(private http: HttpClient) { }

  getAboutSectionData() {
    return this.http.get('/assets/about.json');
  }

  getTeamSectionData() {
    return this.http.get('/assets/team.json');
  }

  getStatisticsSectionData() {
    return this.http.get('/assets/statistics.json');
  }

  getProjectSectionData() {
    return this.http.get('/assets/project.json');
  }

  getSkillsSectionData() {
    return this.http.get('/assets/skill.json');
  }

  getContactSectionData() {
    return this.http.get('/assets/contact.json');
  }
}
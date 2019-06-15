import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JsonHandlerService {

  constructor(private http: HttpClient) { }

  getAboutSectionData() {
    return this.http.get('/assets/about.json');
  }

  getSoftwareSectionData() {
    return this.http.get('/assets/software.json');
  }

  getTeamSectionData() {
    return this.http.get('/assets/team.json');
  }

  getStatisticsSectionData() {
    return this.http.get('/assets/statistics.json');
  }

  getProjectSectionData():Observable<any> {
    return this.http.get('/assets/project.json');
  }

  getSkillsSectionData(): Observable<any> {
    return this.http.get('/assets/skill.json');
  }

  getContactSectionData() {
    return this.http.get('/assets/contact.json');
  }
}
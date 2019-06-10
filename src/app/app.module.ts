import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HeaderComponent } from './header/header.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { TeamSectionComponent } from './team-section/team-section.component';
import { JsonHandlerService } from './jsonHandler.service';
import { StatisticsPromoSectionComponent } from './statistics-promo-section/statistics-promo-section.component';
import { WorkSectionComponent } from './work-section/work-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: AboutSectionComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    HeaderComponent,
    AboutSectionComponent,
    TeamSectionComponent,
    StatisticsPromoSectionComponent,
    WorkSectionComponent,
    SkillsSectionComponent,
    ContactSectionComponent,
    FooterSectionComponent
  ],
  bootstrap: [AppComponent],
  providers: [JsonHandlerService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
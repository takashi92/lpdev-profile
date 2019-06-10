import { Component, OnInit } from '@angular/core';
import { JsonHandlerService } from '../jsonHandler.service';
@Component({
  selector: 'app-statistics-promo-section',
  templateUrl: './statistics-promo-section.component.html',
  styleUrls: ['./statistics-promo-section.component.css']
})
export class StatisticsPromoSectionComponent implements OnInit {
  statisticSections;
  constructor(private jsonHandlerService: JsonHandlerService) {
    this.statisticSections = jsonHandlerService.getStatisticsSectionData();
  }

  ngOnInit() {
  }

}
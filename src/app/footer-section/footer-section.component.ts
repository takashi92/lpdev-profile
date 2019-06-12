import { Component, OnInit } from '@angular/core';
import { JsonHandlerService } from '../jsonHandler.service';
@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.css']
})
export class FooterSectionComponent implements OnInit {
  contactSection;
  constructor(private jsonHandlerService: JsonHandlerService) {
    this.contactSection = this.jsonHandlerService.getContactSectionData();
   }

  ngOnInit() {
  }

}
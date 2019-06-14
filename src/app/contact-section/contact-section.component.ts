import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { JsonHandlerService } from '../jsonHandler.service';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {
  public contactSection;
  constructor(
    private jsonHandlerService: JsonHandlerService) {
    this.contactSection = this.jsonHandlerService.getContactSectionData();
  }

  ngOnInit() {
  }
}
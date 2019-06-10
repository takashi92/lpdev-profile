import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { JsonHandlerService } from '../jsonHandler.service';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {
  contactSection;
  checkoutForm;
  constructor(private formBuilder: FormBuilder,
    private jsonHandlerService: JsonHandlerService) {
    this.contactSection = this.jsonHandlerService.getContactSectionData();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(customerData) {
    this.checkoutForm.reset();
  }

}
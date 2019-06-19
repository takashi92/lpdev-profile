import { Component, OnInit } from '@angular/core';
import { JsonHandlerService } from '../jsonHandler.service';

@Component({
  selector: 'app-customer-section',
  templateUrl: './customer-section.component.html',
  styleUrls: ['./customer-section.component.css']
})
export class CustomerSectionComponent implements OnInit {
  customers: any[] = [];
  constructor(private jsonHandlerService: JsonHandlerService) {
    this.jsonHandlerService.getCustomerSectionData().subscribe(customer => {
      this.customers = customer;
    });
  }

  ngOnInit() {
  }

}

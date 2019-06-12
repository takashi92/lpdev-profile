import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareServiceSectionComponent } from './software-service-section.component';

describe('SoftwareServiceSectionComponent', () => {
  let component: SoftwareServiceSectionComponent;
  let fixture: ComponentFixture<SoftwareServiceSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareServiceSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareServiceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFormComponent } from './application-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('ApplicationFormComponent', () => {
  let component: ApplicationFormComponent;
  let fixture: ComponentFixture<ApplicationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ReactiveFormsModule],
      declarations: [ ApplicationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

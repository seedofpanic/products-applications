import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDialogComponent } from './application-dialog.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {mock} from 'ts-mockito';
import {provideMock} from '../../utils/provideMock';
import {Product} from '../../models/product.model';
import {ApplicationFormComponent} from './application-form/application-form.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('ApplicationDialogComponent', () => {
  let component: ApplicationDialogComponent;
  let fixture: ComponentFixture<ApplicationDialogComponent>;
  let debugElement: HTMLElement;
  let matDialogRef: MatDialogRef<{product: Product}>;

  beforeEach(async(() => {
    matDialogRef = mock(MatDialogRef);

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ReactiveFormsModule],
      declarations: [ ApplicationDialogComponent, ApplicationFormComponent ],
      providers: [
        provideMock(matDialogRef, MatDialogRef),
        {provide: MAT_DIALOG_DATA, useValue: {product: {}}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show errors on form submit', () => {
    debugElement.querySelector('.submit-button').dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(debugElement.querySelectorAll('.error').length).toBeGreaterThan(0);
  });
});

import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { ProductsListComponent } from './products-list.component';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {MatDialog, MatSnackBar, MatTableModule} from '@angular/material';
import {mock} from 'ts-mockito';
import {provideMock} from '../../../utils/provideMock';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let debugElement: DebugElement;
  let matDialogMock: MatDialog;
  let matSnackBarMock: MatSnackBar;

  beforeEach(async(() => {
    matDialogMock = mock(MatDialog);
    matSnackBarMock = mock(MatSnackBar);

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [MatTableModule],
      declarations: [ ProductsListComponent ],
      providers: [
        provideMock(matDialogMock, MatDialog),
        provideMock(matSnackBarMock, MatSnackBar),
      ]
    })
    .compileComponents();
  }));

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    fixture.detectChanges();

    // skip products mock timer and update component
    tick(1000);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show 10 product items', fakeAsync(() => {
    expect(debugElement.nativeElement.querySelectorAll('.item').length).toBe(10);
  }));

  describe('row representation', () => {
    let firstRow: HTMLElement;

    beforeEach(() => {
      firstRow = debugElement.nativeElement.querySelector('.item');
    });

    it('should show title', () => {
      expect(firstRow.querySelector('.title').textContent.trim()).toBe('Product 1');
    });

    it('should show title', () => {
      expect(firstRow.querySelector('.description').textContent.trim().length).toBeGreaterThan(0);
    });

    it('should show apply action button', () => {
      expect(firstRow.querySelector('.apply-button').textContent.trim()).toBe('apply');
    });
  });
});

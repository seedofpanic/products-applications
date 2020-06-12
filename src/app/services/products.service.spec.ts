import {fakeAsync, TestBed, tick} from '@angular/core/testing';

import { ProductsService } from './products.service';
import {take} from 'rxjs/operators';
import {Product} from '../models/product.model';
import {MatDialog, MatSnackBar} from '@angular/material';
import {mock} from 'ts-mockito';
import {provideMock} from '../utils/provideMock';

describe('ProductsService', () => {
  let service: ProductsService;
  let matDialogMock: MatDialog;
  let matSnackBarMock: MatSnackBar;

  beforeEach(() => {
    matDialogMock = mock(MatDialog);
    matSnackBarMock = mock(MatSnackBar);

    TestBed.configureTestingModule({
      providers: [
        provideMock(matDialogMock, MatDialog),
        provideMock(matSnackBarMock, MatSnackBar)
      ]
    });
  });

  beforeEach(() => {
    service = TestBed.get(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getProducts should return 10 mocked products', fakeAsync(() => {
    let resultProducts: Product[] = null;

    service.getProducts()
      .pipe(take(1))
      .subscribe(products => {
        resultProducts = products;
      });
    tick(1000);

    expect(resultProducts.length).toBe(10);
  }));
});

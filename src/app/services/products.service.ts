import {Injectable} from '@angular/core';
import {Observable, range} from 'rxjs';
import {delay, map, toArray} from 'rxjs/operators';
import {Product} from '../models/product.model';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ApplicationDialogComponent} from '../components/application/application-dialog.component';

const MOCK_PRODUCTS = 10;
const LOREM_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id ultrices nulla, quis auctor sem. Proin viverra at ' +
  'metus id gravida. Vestibulum viverra consequat neque, ut venenatis lectus cursus at. Donec nec elit metus. Phasellus sapien lectus, ' +
  'gravida et mi vitae, dignissim varius orci. Etiam cursus ultrices purus at malesuada. Proin maximus pulvinar ex quis pellentesque. ' +
  'Phasellus quis lobortis ante.';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private matDialog: MatDialog, private matSnackBar: MatSnackBar) {
  }

  getProducts(): Observable<Product[]> {
    return this.mockProducts(MOCK_PRODUCTS)
      .pipe(delay(1000));
  }

  private mockProducts(count: number): Observable<Product[]> {
    return range(1, count).pipe(
      map(index => ({
        title: `Product ${index}`,
        desc: LOREM_TEXT
      })),
      toArray()
    );
  }

  openProductApplicationForm(product: Product) {
    const dialog = this.matDialog.open(ApplicationDialogComponent, {data: {product}});

    dialog.afterClosed().subscribe(isSubmitted => {
      if (!isSubmitted) {
        return;
      }

      this.matSnackBar.open('Product application submitted', 'hide', {
        duration: 2000,
      });
    });
  }
}

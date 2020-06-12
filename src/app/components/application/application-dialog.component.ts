import {Component, Inject, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-application-dialog',
  templateUrl: './application-dialog.component.html',
  styleUrls: ['./application-dialog.component.css']
})
export class ApplicationDialogComponent implements OnInit {
  product: Product;
  private form: FormGroup;

  constructor(private dialogRef: MatDialogRef<ApplicationDialogComponent>, @Inject(MAT_DIALOG_DATA) data: {product: Product}) {
    this.product = data.product;
  }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close(false);
  }

  submit() {
    if (this.form.valid) {
      this.dialogRef.close(true);
    } else {
      this.form.markAllAsTouched();
    }
  }

  setForm($event: FormGroup) {
    this.form = $event;
  }
}

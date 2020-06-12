import {NgModule} from '@angular/core';
import {ApplicationDialogComponent} from './application-dialog.component';
import {ApplicationFormComponent} from './application-form/application-form.component';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [MatDialogModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, CommonModule],
  declarations: [ApplicationDialogComponent, ApplicationFormComponent],
  entryComponents: [ApplicationDialogComponent]
})
export class ApplicationModule {
}
